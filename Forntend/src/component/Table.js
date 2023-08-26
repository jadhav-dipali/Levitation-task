import { useEffect, useState } from "react"
import "../Style/table.css"
import {useNavigate} from "react-router-dom"



export default function Table() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null); // Added state for selected date

    useEffect(() => {
        if( ! localStorage.getItem("user-token")){
            navigate("/") 
        }
        fetch("https://levitation-task-backend.onrender.com/userInfo")
            .then(res => res.json())
            .then(res => {
                const newData = filter ? res.data.reverse() : res.data;
                setData(newData);
            });
    }, [filter]);

    const handleDateClick = (clickedDate) => {
        if (selectedDate === clickedDate) {
            setSelectedDate(null); // Clear filter if date is clicked again
        } else {
            setSelectedDate(clickedDate);
        }
    };

    const filteredData = selectedDate
        ? data.filter(item => item.date === selectedDate)
        : data;

    return <>
        <h1 style={{ "textAlign": "center", "color":"#664de5"}}><i>Submissions Table</i></h1>

        <div className="table-holder">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNo</th>
                        <th>File</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        <th>Grade</th>
                        <th
                            onClick={() => {
                                setFilter(!filter);
                            }}
                            style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((d, i) => {
                            return <tr key={i}>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phoneNo}</td>
                                <td>{d.file[0].url}</td>
                                <td>{d.address}</td>
                                <td>{d.city}</td>
                                <td>{d.state}</td>
                                <td>{d.country}</td>
                                <td>{d.pincode}</td>
                                <td>{d.select}</td>
                                <td
                                    onClick={() => handleDateClick(d.date)}
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'underline',
                                        fontWeight: selectedDate === d.date ? 'bold' : 'normal'
                                    }}
                                >
                                    {d.date}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}