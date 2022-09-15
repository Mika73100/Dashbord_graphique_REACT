
export const userColumns = [
    {   field: "id",
        headerName: "ID",
        width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
            );
        },
    },
];


export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/2922450/pexels-photo-2922450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "2snow@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Jamie-Lannister@gmail.com",
        status: "active",
        age: 30,
    },
    {
        id: 3,
        username: "Boby",
        img: "https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Boby@gmail.com",
        status: "passive",
        age: 45,
    },
    {
        id: 4,
        username: "Rosivan",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Rosivan@gmail.com",
        status: "pending",
        age: 26,
    },
    {
        id: 5,
        username: "Leonardo",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Leonardo@gmail.com",
        status: "active",
        age: 65,
    },
    {
        id: 6,
        username: "Robin",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Robin@gmail.com",
        status: "passive",
        age: 18,
    },
    {
        id: 7,
        username: "Michael",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Michael@gmail.com",
        status: "active",
        age: 31,
    },
    {
        id: 8,
        username: "Juan",
        img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        email: "Juan@gmail.com",
        status: "pending",
        age: 45,
    },
]