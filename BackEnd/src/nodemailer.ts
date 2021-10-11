import axios from 'axios'



var nodemailer = require('nodemailer');

var sender:string = 'youremail@gmail.com'

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: 'yourpassword'
  }
});

type AllUserResp = { id:number, email:string, country: string };

var setUsers:AllUserResp[]=[{id:1, email:'h',country:'d'}];

var datas:any[] = []


type CoronaVirusApiResponse = { locations: [{ country: string; latest:{ confirmed: number; deaths: number; recovered: number;} }] };


var cron = require('node-cron');
 
cron.schedule('0 12 * * *', () => {

    const apiUrl1 = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
      axios
        .get(apiUrl1, { headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" } })
        .then((res: { data: CoronaVirusApiResponse }) => { datas = res.data.locations
          

          

      const apiUrl = "http://localhost:4000/api/getEmailSubscribers";
      axios
        .get(apiUrl, { headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" } })
        .then((res: { data: AllUserResp[] }) => {setUsers = res.data
          var arrayLength = setUsers ? setUsers.length : 0;
          for (var i = 0; i < arrayLength; i++) {
            var reciever:string = setUsers[i].email
            var place:string = setUsers[i].country
            
            console.log(reciever);
            
            for (var a = 0; a < datas.length; a++){
              if (datas[a].country===place){
                console.log(datas[a].latest)
              }
            }


            
            var mailOptions = {
              from: sender,
              to: reciever,
              subject: 'Covid data',
              text: `Numbers in your country are 
                deaths :${datas[a].deaths} , 
                confirmed :${datas[a].confirmed}, 
                recovered :${datas[a].recovered}.`
            };
            
            transporter.sendMail(mailOptions, function(error:any, info:any){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });


          }});

        });

      }, {
        scheduled: true,
        timezone: "Europe/London"
      });





