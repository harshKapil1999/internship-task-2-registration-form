import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelForm = (e) => {
    e.preventDefault();
    let form = e.target;
		let formData = new FormData(form);
   // console.log(formData);
		let formDataObj = Object.fromEntries(formData.entries())
    let formJSON = JSON.stringify(formDataObj)
		//console.log(formDataObj)
		//console.log(formJSON)
    alert(`Congratulation ${formDataObj.name} you are registered to the website.`)
  }

  return (
    <div className="w-full h-screen bg-black p-5">
      <h1 className="text-white text-3xl font-extrabold text-center py-8">
        Registration Form
      </h1>
      <div className="w-full flex items-center justify-center">
        <form
          onSubmit={handelForm}
          className="flex flex-col items-center justify-center w-full max-w-3xl"
        >
          <div className="w-full max-w-lg flex items-center justify-between  gap-3 m-3">
            <input
              type="textbox"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
              className=" w-full py-2 px-2 text-lg rounded-md"
              required="Please enter Name"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              min={18}
              className=" w-full py-2 px-2 text-lg rounded-md"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-full max-w-lg py-1 px-2 text-lg m-3 rounded-md"
          />
          <input
            type="textbox"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className=" w-full max-w-lg py-2 px-2 text-lg m-3 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            minLength={8}
            className=" w-full max-w-lg py-1 px-2 text-lg m-3 rounded-md"
          />
          <button
            className="w-full max-w-lg py-2 text-lg m-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 active:bg-blue-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
