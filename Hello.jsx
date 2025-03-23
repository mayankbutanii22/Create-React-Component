function Hello(){

  let myName = "Mayank";
  let number = 456;
  let fullName = () => {
    return "Mayank Butani";
  }
  return(
    <div>
      <p>Message No : {number} Hello this is the future speaking.I am your master {fullName()}</p>
    </div>
  )
}
export default Hello;