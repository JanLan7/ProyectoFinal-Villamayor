export default function ContactContainer() {
  return (
      <div style={styles.container}>
          <h2 style={styles.title}>Contacto</h2>
          <form style={styles.form}>
              <div style={styles.formGroup}>
                  <label style={styles.label}>Nombre:</label>
                  <input 
                      type="text" 
                      style={styles.input}
                      placeholder="Tu nombre"
                  />
              </div>
              <div style={styles.formGroup}>
                  <label style={styles.label}>Email:</label>
                  <input 
                      type="email" 
                      style={styles.input}
                      placeholder="tu@email.com"
                  />
              </div>
              <div style={styles.formGroup}>
                  <label style={styles.label}>Mensaje:</label>
                  <textarea 
                      style={styles.textarea}
                      rows="5"
                      placeholder="Escribe tu mensaje..."
                  ></textarea>
              </div>
              <button type="submit" style={styles.button}>Enviar</button>
          </form>
      </div>
  );
}

const styles = {
container: {
  maxWidth: '600px',
  margin: '2rem auto',
  padding: '2rem'
},
title: {
  textAlign: 'center',
  color: '#2c3e50',
  marginBottom: '2rem'
},
form: {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
},
formGroup: {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
},
label: {
  fontWeight: 'bold',
  color: '#2c3e50'
},
input: {
  padding: '0.8rem',
  border: '1px solid #bdc3c7',
  borderRadius: '4px',
  fontSize: '1rem'
},
textarea: {
  padding: '0.8rem',
  border: '1px solid #bdc3c7',
  borderRadius: '4px',
  fontSize: '1rem',
  resize: 'vertical'
},
button: {
  backgroundColor: '#3498db',
  color: 'white',
  padding: '1rem',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s'
}
}