const body= require("body-parser");
const express=require("express")
const app = express()
app.use(express())
app.use(express.json());

const port = 3000



let patients = [
  { id: 1, name: "Rahul", age: 30, checked: false },
  { id: 2, name: "Anita", age: 25, checked: true }
];


function clinicOpen ( req, res, next){
const now = new Date();       
const hour = now.getHours();
if(hour<9 || hour>18){
    res.json("Clinic is closed")
}
next ()
}



app.post("/patients", clinicOpen, (req, res) => {
  let newId;
  if (patients.length === 0) {
    newId = 1;
  } else {
    newId = patients[patients.length - 1].id + 1;
  }

  const name = req.body.name;
  const age = req.body.age;

  const newPatient = {
    id: newId,
    name: name,
    age: age,
    checked: false
  };

  patients.push(newPatient);

  res.send("Patient added");
});



app.delete("/patients/:newid", (req, res) => {
  const newid = Number(req.params.newid); // Get id from URL and convert to number
  let found = false;

  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id === newid) {
      patients.splice(i, 1); // remove the patient at index i
      found = true;
      break; // stop the loop once found
    }
  }

  if (found) {
    res.status(204).send("Patient removed");
  } else {
    res.status(404).send("Patient not found");
  }
});




    

app.put("/patients/check/:id", (req, res) => {
  const newid = Number(req.params.id); // Correct param
  const checked = req.body.checked;    // true/false from client
  let found = false;

  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id === newid) {
      patients[i].checked = checked;  // Correct object update
      found = true;
      break; // stop after updating
    }
  }

  if (found) {
    res.status(200).send("Patient checked");
  } else {
    res.status(404).send("Patient not found");
  }
});





app.get("/patients" ,clinicOpen,(req,res)=>{
    res.send(patients)
})







app.listen(port , ()=>{
console.log(`Example is return on ${port}`)
})