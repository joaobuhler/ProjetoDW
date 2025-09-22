import { createClient } from "@supabase/supabase-js"
import { useState } from 'react'

function App() {

  // const [tarefas, setTarefas] = useState([])

  const URL = "https://aldnbzmjmquyhvtgwqau.supabase.co"
  const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZG5iem1qbXF1eWh2dGd3cWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NDAyOTAsImV4cCI6MjA3NDExNjI5MH0.PaL1VwAwtWtqkwhUjJI10wvO8w7N5d1ybMKi7M7UfSY"
  
  const supabase = createClient(URL, KEY)
  const consultaTarefas = async () =>{

  const tarefas = supabase
                        .from('tarefas')
                        .select('*')
                        
    console.log(tarefas2)
}

  return (
    <>
    
      <h1>react com supabase</h1>
      <button onClick = {consultaTarefas}>
      ok</button>

      <br />
      <br />
      <br />

      <div>
        <div>tarefa 1</div>
        <div>tarefa 2</div>
        <div>tarefa 3</div> 


      </div>
    
    </>

    
  )
}