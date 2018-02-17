const checkToken = require("../auth/checkToken");
const verifyToken = require("../auth/verifyToken");
const db = require("../models");
const fs = require("fs");
const cloudinary = require("cloudinary");



module.exports.postNew=(req,res)=>{
	console.log("hit postNew");
  const username = req.body.username;
  console.log(req.body.username);
        
        const imgFilePath = "./temp/pic.jpg";
        let incomingImg = req.body.imgString;
        //let incomingVid = req.body.???
        incomingImg = incomingImg.split(';base64,').pop();
        fs.writeFile(imgFilePath, incomingImg, { encoding: 'base64' }, function(err) {
            console.log('File created');
        
        cloudinary.uploader.upload(imgFilePath,function(result, error)
             {
                if (error) {
                    console.log(error)
                } 
                else {
                  console.log("Cloudinary done");
    
                  //console.log(req.body.loc.coords);
                    const newMedia = {
                        url: result.secure_url,
                        lat: req.body.loc.lat,
                        long: req.body.loc.lng,
                        timestamp:req.body.loc.timestamp
                    };
                    console.log("newMedia created");
                    console.log(newMedia);

                    db.Media.create(newMedia)
                        .then(function(dbMedia) {
                          console.log("database updated")
                          console.log(dbMedia);
                          return db.User.findOneAndUpdate({ username:username} , { $push: { media: dbMedia._id } }, { new: true });
                          res.sendStatus(200);
                        })
                        .catch(function(err) {
                            res.json(err);
                        });
                };
                
            });
        })
}

module.exports.getLocal=(req,res)=>{
	console.log("the right local media");
	// console.log(req.body);
  const currLat = req.body.loc.lat;
  const currLong = req.body.loc.lng;
  console.log(currLong,currLat);

        db.Media.find({})
        .where({
                    lat: {
                        $gte: currLat + 0.001,
                        $lte: currLat - 0.001
                    }
                } &&
                {
                    long: {
                        $gte: currLong + 0.001,
                        $lte: currLong - 0.001
                    }

                
      })
            .then(dbMedia=> {
              console.log("searched");
                console.log(dbMedia);
                console.log("sending");
                res.json(dbMedia);
            })
            .catch(function(err) {
                res.json(err);
            });

	 // jwt.verify(req.body.token, JWT_SECRET, function(err, decoded) {
  //     if (err) {
  //       console.log("You have a token and an error")
  //       console.log(err)
  //       return res.json({success: false, message: "Failed to authenticate token.", err: err});
  //     }
  //     else {
  //       console.log("You have a token and no error")
  //       console.log(decoded);
        
	
  //       console.log(req.headers.long);
  //       const currLat = req.headers.lat;
  //       const currLong = req.headers.long;

  //       db.Media.find({}).$where({
  //                   lat: {
  //                       $gte: currLat + 0.00001,
  //                       $lte: currLat - 0.00001
  //                   }
  //               } &&
  //               {
  //                   long: {
  //                       $gte: currLong + 0.0001,
  //                       $lte: currLong - 0.0001
  //                   }
  //               })
  //           .then(function(dbMedia) {
  //               console.log(dbMedia);
  //               res.json(dbMedia);
  //           })
  //           .catch(function(err) {
  //               return res.json(err);
  //           });

  //             }
  //   })
    
}