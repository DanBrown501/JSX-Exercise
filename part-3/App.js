function App() {
    return (
      <div>
        <Person
          name="God"
          age={1000000000}
          hobbies={["people watching", "pottery", "writing books"]}
        />
        <Person 
          name="Adam" 
          age={2} 
          hobbies={["Gardening", "naming stuff"]} 
        />
        <Person
          name="Eve"
          age={1}
          hobbies={["picking fruit", "talking to animals", "making clothes"]}
        />
      </div>
    );
  }