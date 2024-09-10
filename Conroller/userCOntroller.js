const fs =require('fs')
const user=require('../user.json')
const  getUsers=async (req,res)=>{

    res.status(200).json({
        success:true,
        message:user
    })
   

}

const findUser=async (req,res)=>{

    const id=parseInt(req.params.id);
   let getUser= user.findIndex((user)=>user.id==id);
    res.status(200).json({
        success:true,
        message:user[getUser]
    })
   

}

const addUser=async (req,res)=>{
    // const {id,first_name,last_name,email,gender}=req.body;
   user.push(req.body)

    fs.writeFile('user.json', JSON.stringify(user), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('User  successfully.');
    });


    res.status(200).json({
        suscess:"USer add Successfully",
    })
}

 module.exports={
    getUsers,
    findUser,
    addUser
}