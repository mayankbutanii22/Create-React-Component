function Random() {

  let number = Math.random()*100;
  return (
    <div>
      <h1 style = {{color:"red",fontSize:"50px",
      backgroundColor:"yellow",margin:"100px",
      }}>Random number is :{Math.round(number)}</h1>
    </div>
  )
} 

export default Random;