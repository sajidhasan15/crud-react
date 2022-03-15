import React, { useEffect, useState } from 'react';

function Form(props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname) {
            if (props.editItemId) {
                const newData = props.data.map(item => {
                    if (item.id === props.editItemId) {
                        return {
                            id: item.id,
                            firstname: firstname,
                            lastname: lastname
                        }
                    } else {
                        return item;
                    }
                });
                props.setData(newData);
                props.setShowForm(false);
                props.setEditItemId(null);
            } else {
                props.setData([...props.data, {
                    id: props.lastId + 1,
                    firstname: firstname,
                    lastname: lastname
                }]);
                props.setShowForm(false);
                props.setLastId(props.lastId + 1);
            }
        } else {
            alert('Please fill all the fields');
        }
    }

    useEffect(() => {
        if (props.editItemId) {
            const item = props.data.find(item => item.id === props.editItemId);
            setFirstname(item.firstname);
            setLastname(item.lastname);
        }
    }, [props.editItemId]);
    


    return (
        <div style={{position:'absolute', top:'20px', right:'0', bottom:'0', left:'0'}} id="modal">
          <div style={{display:'flex', justifyContent:'center'}}>
            <div className="card" style={{padding:'36px', backgroundColor:'rgb(240,240,240)', borderRadius:'10px'}}>
              <div>
                <form>
                  <div>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                  </div>
                  <div style={{display:'flex'}}>
                    <button className="button-green" style={{width:'100%'}} onClick={handleSubmit}>Save</button>
                    <button onClick={()=> props.setShowForm(!props.showForm)} className="button-red" style={{width:'100%'}}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Form;