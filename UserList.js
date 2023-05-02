import { useEffect,useState } from "react";
import axios from "axios"


function UserList() {
    // ...
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/users'
        );
        setListOfUsers(result.data);
      };
  
      fetchData();
    }, []);
  
    const styles = {
      ul: {
        listStyle: 'none',
        padding: 0,
      },
      li: {
        marginBottom: '10px',
        backgroundColor: '#f2f2f2',
        borderRadius: '5px',
        padding: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      },
      h1: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
      },
    };
  
    return (
      <div>
        <h1 style={styles.h1}>List of Users:</h1>
        <ul style={styles.ul}>
          {listOfUsers.map(user => (
            <li key={user.id} style={styles.li}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default  UserList