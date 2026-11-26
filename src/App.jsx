
import { useState } from 'react'
import './App.css'

function App() {
  const [student, setStudent] = useState({
    name: '',
    roll: '',
    department: '',
    year: '',
    email: '',
    phone: '',
    blood: '',
    address: ''
  })

  const [photo, setPhoto] = useState(null)

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  }

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  const handleReset = () => {
    setStudent({
      name: '',
      roll: '',
      department: '',
      year: '',
      email: '',
      phone: '',
      blood: '',
      address: ''
    })
    setPhoto(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🎓 Student ID Card Generator</h1>
        <p>Create your professional college identity card</p>
      </header>

      <main className="container">

        <section className="form-section">
          <h2>Student Details</h2>

          <form onSubmit={(e) => e.preventDefault()}>

            <label>Student Name</label>
            <input
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />

            <label>Register Number</label>
            <input
              name="roll"
              value={student.roll}
              onChange={handleChange}
              placeholder="Enter register number"
              required
            />

            <label>Department</label>
            <select
              name="department"
              value={student.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="CSE">Computer Science</option>
              <option value="AIML">AI & Machine Learning</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics</option>
              <option value="EEE">Electrical Engineering</option>
            </select>

            <label>Year</label>
            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="I Year">I Year</option>
              <option value="II Year">II Year</option>
              <option value="III Year">III Year</option>
              <option value="IV Year">IV Year</option>
            </select>

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email"
            />

            <label>Phone Number</label>
            <input
              name="phone"
              value={student.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />

            <label>Blood Group</label>
            <select
              name="blood"
              value={student.blood}
              onChange={handleChange}
            >
              <option value="">Select Blood Group</option>
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(
                group => <option key={group}>{group}</option>
              )}
            </select>

            <label>Address</label>
            <textarea
              name="address"
              value={student.address}
              onChange={handleChange}
              placeholder="Enter address"
            />

            <label>Upload Student Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhoto}
            />

            <div className="buttons">
              <button type="button" onClick={handleReset}>
                Reset
              </button>
              <button
                type="button"
                onClick={() => window.print()}
              >
                Print ID Card
              </button>
            </div>

          </form>
        </section>

        <section className="preview-section">
          <h2>ID Card Preview</h2>

          <div className="id-card">

            <div className="card-header">
              <h3>ABC COLLEGE OF ENGINEERING</h3>
              <p>STUDENT IDENTITY CARD</p>
            </div>

            <div className="card-content">

              <div className="photo">
                {photo ? (
                  <img src={photo} alt="Student" />
                ) : (
                  <span>👤</span>
                )}
              </div>

              <h2>{student.name || 'STUDENT NAME'}</h2>
              <p className="student-label">STUDENT</p>

              <div className="details">
                <p><b>ID Number:</b> {student.roll || 'Not entered'}</p>
                <p><b>Department:</b> {student.department || 'Not selected'}</p>
                <p><b>Year:</b> {student.year || 'Not selected'}</p>
                <p><b>Email:</b> {student.email || 'Not entered'}</p>
                <p><b>Phone:</b> {student.phone || 'Not entered'}</p>
                <p><b>Blood Group:</b> {student.blood || 'Not selected'}</p>
                <p><b>Address:</b> {student.address || 'Not entered'}</p>
              </div>

            </div>

            <div className="card-footer">
              VALID FOR ACADEMIC YEAR 2026–2027
            </div>

          </div>

          <p className="preview-note">
            Your ID card updates automatically as you enter details.
          </p>

        </section>

      </main>
    </div>
  )
}

export default App