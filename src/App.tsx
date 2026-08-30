

import './App.css'
import Button from './components/ui/Button/Button'
import Card from './components/ui/Card/Card'
import Table from './components/ui/Table/Table';


function App() {
   const students = [
    {
      name: "Ahmed",
      age: 20,
      city: "Cairo",
    },
    {
      name: "Sara",
      age: 21,
      city: "Giza",
    },
    {
      name: "Omar",
      age: 19,
      city: "Alexandria",
    },
    {
      name: "Mariam",
      age: 22,
      city: "Mansoura",
    },
  ];

  const columns = ["Name", "Age", "City"];
    return (
      <>
      <h1>Our Courses</h1>
     
    <div className="app-container">
      

      <Card
        title="React Course"
        description="Learn how to build modern web applications using React."
        image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500"
      >
        <Button
          text="Start Course"
          variant="primary"
          onClick={() => alert("React Course Started")}
        />
      </Card>

      <Card
        title="JavaScript Course"
        description="Master JavaScript fundamentals and modern features."
        image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500"
      >
        <Button
          text="Learn More"
          variant="secondary"
          onClick={() => alert("More Information")}
        />
      </Card>
      
    </div>
    <Table  columns={columns}
        data={students}
        striped={true} />
     </>
  );
}

export default App
