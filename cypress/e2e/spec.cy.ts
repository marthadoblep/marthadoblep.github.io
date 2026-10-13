describe('CVs Test', () => {
  it('Test header component', () => {
    cy.visit('/')
    cy.contains('Marte Valente Alvarado Mendivil')
    cy.contains('Estudiante de Ing de Software')
  })

  it('Test work-experience component', () => {
    cy.visit('/')
    cy.contains('Experiencia Laboral')
    cy.contains('Personal de Atención y Servicio')
    cy.contains('Administrador de Sistema de Pedidos y Redes Sociales')
    cy.contains('Entrenador de IA Generativa de Imágenes')
  })

  it('Test skills component', () => {
    cy.visit('/')
    cy.contains('Habilidades Técnicas')
    cy.contains('HTML5 & CSS3')
  })

  it('Test education component', () => {
    cy.visit('/')
    cy.contains('Educación')
    cy.contains('Universidad Veracruzana')
  })

  it('Test certificates component', () => {
    cy.visit('/')
    cy.contains('Certificados')
  })

  it('Test languages component', () => {
    cy.visit('/')
    cy.contains('Idiomas')
    cy.contains('Nativo')
  })

  it('Test interests component', () => {
    cy.visit('/')
    cy.contains('Intereses')
    cy.contains('wordbuilding')
  })
})
