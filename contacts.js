// make imports of modules fs and path to work with the file system
const fs = require("fs").promises; // fs is installed by default when using node, .promises allows to use promises
const path = require("path");

// Create a contactsPath variable and put the path to the contacts.json file in it. To compose a path, use the methods of the path module
const contactsPath = path.join(__dirname, "/db/contacts.json");
// console.log(contactsPath);

// create a variable to store the readFile method to use in multiple functions
const read = fs.readFile(contactsPath).then((data) => {
  const allData = JSON.parse(data);
  console.log(allData);
  return allData
});

// Add functions to work with a collection of contacts. In functions, use the fs module and its readFile() and writeFile() methods
async function listContacts() {
  const data = await read; 
  console.table(data);
  return data
}


async function getContactById(contactId) {
    const data = await read; 
    const singleContact = data.find(item => item.id === contactId); 
    if (singleContact) {
        console.log(singleContact)
        return singleContact
    } else {
        console.log('No user with that id');
    }

}

async function removeContact(contactId) {
    const data = await read; 
    const newData = data.filter(item => item.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(newData));
    console.log('Contact deleted');
    return newData;
}

async function addContact(name, email, phone) {
    const data = await read;
    const newContact = {
        id: "",
        name: name,
        email: email,
        phone: phone,
    }
    data.push(newContact);
    console.log(data)

    try {
        fs.writeFile(contactsPath, JSON.stringify(data))
        console.log('Contact added successfully')
    } catch (error) {
        console.error('Error while adding contract', error.message);
    }
    
}

// addContact("bella", "bella@test.com", "876-356-0086");
// listContacts()


// getContactById("qdggE76Jtbfd9eWJHrssH");

// Make export of created functions via module.exports
module.exports = { listContacts, getContactById, removeContact, addContact };
