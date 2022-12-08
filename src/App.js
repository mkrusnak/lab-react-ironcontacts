import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {

let fiveContacts = contacts.slice(0, 5);
const [contactList, setContactList] = useState(fiveContacts)

const addRandom = () => { 
      const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
       setContactList([randomContact, ...contactList])
}


const sortByPopularity = () => {
  let sortedPop = [...contactList].sort((a,b) => b.popularity > a.popularity ? 1 : -1)
  setContactList(sortedPop);
}

const sortByName = () => {
  let sortedName = [...contactList].sort((a, b) => a.name.localeCompare(b.name))
  setContactList(sortedName)
}

const deleteContact = (id) => {
  const deletedContacts = [...contactList].filter(el => el.id !== id)
  setContactList(deletedContacts)
}

return(
  <>
   <h1>Contacts</h1>
   <button onClick={() => {sortByPopularity();}} >Sort by most popular</button>
   <button onClick={() => {sortByName();}} >Sort by name</button>
   <button onClick={() => {addRandom();}} >Add Random Contact</button>
    <table>
    <thead>
    <tr>
    <th>Picture</th>
    <th>Name</th>
    <th>Popilarity</th>
    <th>Won Oscar</th>
    <th>Won Emmy</th>
    <th>Change</th>
    </tr>
    </thead>
    <tbody>
          {contactList.map((el) => (
            <tr key={el.id}>
              <td>
                <img src={el.pictureUrl} alt="img" />
              </td>
              <td>{el.name}</td>
              <td>{el.popularity}</td>
              {el.wonOscar ? <td>🏆</td> : <td></td>}
              {el.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
                <button onClick={() => {deleteContact(el.id)}}>Delete Contact</button>
              </td>
            </tr>
          ))}
        </tbody>
   </table>
   </>
)


}
 
export default App;
