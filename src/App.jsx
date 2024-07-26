import { useState } from 'react'
import { evaluate } from 'mathjs'
import './App.css'

const App = () => {
  const [sum, setSum] = useState("")
  const buttons = ["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "/", "0", ".", "=", "c"]

  const handleClick = (btn) => {
    if (btn === "=") { //Independant research try & catch
      try {
        const result = evaluate(sum)
        setSum(result)
      } catch {
        setSum("ERROR!")
      }

    } else if (btn === "c") {
      setSum("")
    } else {
      setSum((prevInput) => prevInput + btn)
    }
  }

  return (
    <div className="centre">
      <div className='calc'>
        <h2 id='name'>Kyle's Calculator</h2>
        <h4 className="inputBox">{sum}</h4>
        <div className="buttonContainor">
          {buttons.map((button, index) => {
            return (
              <button className="bttn" key={index} onClick={() => handleClick(button)}>{button}</button>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}
export default App
