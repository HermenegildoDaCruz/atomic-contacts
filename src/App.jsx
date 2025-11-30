import Header from "./components/Header"
import Contacts from "./components/Contacts"
import NewContact from "./components/NewContact"
import ConfirmDeletion from "./components/ConfirmDeletion"
import { useState } from "react"

// GET CONTACTS STORAGED IN LOCALSTORAGE (CONTACTS, FAVORITES)

function App() {
  const [contactState, setContactState] = useState({
    selectedContactId: null,
    isEditing: false,
    isCreating: false,
    isDeleting: false,
    contacts: [],
    favorites: [],
    filter: "a-z"
  })

  function handleAddContact (name, number){
    const contact = {
      id: Math.random(),
      name: name,
      number:number,
    }
    setContactState(prevContactState => {
      return {
        ...prevContactState,
        contacts: [...prevContactState.contacts, contact],
        isCreating: false
      }
    })
  }

  function handleDeleteContact(){
    if (contactState.selectedContactId !== null){
      setContactState(prevContactState => {
        return {
          ...prevContactState,
          contacts: prevContactState.contacts.filter(contact => contact.id !== prevContactState.selectedContactId),
          isDeleting: false
        }
      })
    }
  }
  function handleStopCreating(){
    setContactState(prevContactState => {
      return {
        ...prevContactState,
        isCreating: false
      }
    })
  }
  function handleStartCreating(){
    setContactState(prevContactState => {
      return {
        ...prevContactState,
        isCreating: true,
      }
    })
  }

  function handleStartDeletion(id){
    setContactState(prevContactState => {
      return {
        ...prevContactState,
        isDeleting: true,
        selectedContactId:id
      }
    })
  }
  function handleStopDeletion(){
     setContactState(prevContactState => {
      return {
        ...prevContactState,
        isDeleting: false,
        selectedContactId: null
      }
    })
  }

  return (
    <>
      <NewContact open = {contactState.isCreating} onAddContact={handleAddContact} onStopCreating = {handleStopCreating}/>
      <ConfirmDeletion open = {contactState.isDeleting} onDelete={handleDeleteContact} onStopDeleting ={handleStopDeletion}/>
      <Header onStartCreating = {handleStartCreating}></Header>
      {contactState.contacts && <Contacts contacts = {contactState.contacts} onStartDeletion = {handleStartDeletion} />}
      {/* {!contactState.contacts && <div>
        <h2>No contact created.. </h2>
        <button className="btn--primary">create</button>
      </div> } */}

    </>
  )
}

export default App
