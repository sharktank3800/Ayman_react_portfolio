

function Footer() {
    const date = new Date()
  
    return (
      <footer>
        <p>&copy; {date.getFullYear()}</p>
        <p>Developed by Ayman Shiham</p>
      </footer>
    )
  }
  
  export default Footer