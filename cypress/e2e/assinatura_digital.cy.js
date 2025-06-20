/// <reference types= "cypress" />

describe('Módulo - Atendimentos Plano', () => {

  beforeEach(() => {
    cy.login()
    cy.refreshToken()
  })

  describe('Atendimento Plano - Forwarding - Cria Encaminhamento', () => {

    it('Validar retorno 201 - /api/v1/attendance/plan/forwarding', () => { //Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 130816,
          professionalId: 20357,
          specialtyId: 611,
          ipClient: '10.244.1.1',
          professionId: 611,
          professionalExecutant: 'Dr Profissional Teste QA',
          solicitation: 'Solicitação',
          medicalClassificationIds: [
            1,
            2
          ],
          problems: ''
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/forwarding', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 130816,
          professionalId: 20357,
          specialtyId: 611,
          ipClient: '10.244.1.1',
          professionId: 611,
          professionalExecutant: 'Dr Profissional Teste QA',
          solicitation: 'Solicitação',
          medicalClassificationIds: [
            1,
            2
          ],
          problems: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/forwarding', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          //'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 130816,
          professionalId: 20357,
          specialtyId: 611,
          ipClient: '10.244.1.1',
          professionId: 611,
          professionalExecutant: 'Dr Profissional Teste QA',
          solicitation: 'Solicitação',
          medicalClassificationIds: [
            1,
            2
          ],
          problems: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/forwarding', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 130816,
          professionalId: 20357,
          specialtyId: 611,
          ipClient: '10.244.1.1',
          professionId: 611,
          professionalExecutant: 'Dr Profissional Teste QA',
          solicitation: 'Solicitação',
          medicalClassificationIds: [
            1,
            2
          ],
          problems: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Forwarding - Remover Encaminhamento', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/forwarding', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 130816,
          ipClient: '10.244.1.1'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)

        const item = response.body
        expect(item).to.have.property('flagDeError', false);
        expect(item).to.have.property('codigo', 201)
        expect(item).to.have.property('mensagem', 'Encaminhamento deletado com sucesso.')
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/forwarding', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST', //Método POST no lugar de DELETE
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 130816,
          ipClient: '10.244.1.1'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/forwarding', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          //'Authorization': `Bearer ${token}`, // Token inválido
          'Content-Type': 'application/json'
        },
        body: {
          id: 130816,
          ipClient: '10.244.1.1'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/forwarding', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Passando o método GET no lugar de DELETE
        url: '/api/v1/attendance/plan/forwarding',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 130816,
          ipClient: '10.244.1.1'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Forwarding - Download do PDF', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/forwarding/pdf', () => { //Verificar depois
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/forwarding/pdf?id=353494',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/forwarding/pdf', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/forwarding/pdf', // Sem passar patientId 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/plan/forwarding/pdf', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE', // Método DELETE no lugar de GET
        url: '/api/v1/attendance/plan/forwarding/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })

  describe('Atendimento Plano - Medical Certificates - Criar Atestado', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-certificates', () => { //Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          modelFormId: 1,
          medicalCertificates: 'Dados.',
          ipClient: '1.11'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)

        const item = response.body;
        expect(item).to.have.property('attendanceId', 1);
        expect(item).to.have.property('modelFormId', 1);
        expect(item).to.have.property('medicalCertificates', 'Dados.');
        expect(item).to.have.property('ipClient', '1.11');
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-certificates', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // sem dados no body

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/medical-certificates', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Método divergente
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          modelFormId: 1,
          medicalCertificates: 'Dados.',
          ipClient: '1.11'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Medical Certificates - Remover Atestado', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-certificates', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 1,
          ipClient: '1.11'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)

        const item = response.body;
        expect(item).to.have.property('flagDeError', false);
        expect(item).to.have.property('codigo', 201);
        expect(item).to.have.property('mensagem', 'Atestado deletado com sucesso.');
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-certificates', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { //Sem parâmetro no body

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/medical-certificates', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Método divergente
        url: '/api/v1/attendance/plan/medical-certificates',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 1,
          ipClient: '1.11'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Medical Certificates - Download do PDF', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-certificates/pdf', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-certificates/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-certificates/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-certificates/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // sem parametro como id e patientId 
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/medical-certificates/pdf', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-certificates/pdf',
        headers: {
          //'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json' // sem parametro como id e patientId 
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/plan/medical-certificates/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/medical-certificates/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // sem parametro como id e patientId 
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })

  describe('Atendimento Plano - Orientation - Criar Orientação', () => {

    it('Validar retorno 201 - /api/v1/attendance/plan/orientation', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          modelFormId: 1,
          orientation: '',
          file: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parâmetro no body
          attendanceId: 1,
          modelFormId: 1,
          orientation: '',
          file: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          //'Authorization': `Bearer ${token}`, //Token inválido
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          modelFormId: 1,
          orientation: '',
          file: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          modelFormId: 1,
          orientation: '',
          file: ''
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Orientation - Remover Orientação', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/orientation', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 1,
          ipClient: 1,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parametro
          id: 1,
          ipClient: 1,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          //'Authorization': `Bearer ${token}`, // Token inválido
          'Content-Type': 'application/json'
        },
        body: {
          id: 1,
          ipClient: 1,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/orientation', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/orientation',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parametro
          id: 1,
          ipClient: 1,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Orientation - Download PDF', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/orientation/pdf', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/orientation/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/orientation/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/orientation/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }, // Sem parâmetro id e patientId 
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/orientation/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/orientation/pdf',
        headers: {
          //'Authorization': `Bearer ${token}`, // Token inválido
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })
  })

  describe('Atendimento Plano - Medical Prescription - Criar Prescrição', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-prescription', () => { //Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          typePrescriptionId: 1,
          prescriptionsMedical: [
            {
              name: 'Nome 1',
              amount: 2,
              typeStripe: 'tipo tarja',
              typeMedicine: 'tipo medicamento.',
              flagUseContinuous: '1',
              dosage: 'posologia',
              UseControlled: 1
            }
          ],
          memedPrescritionUuid: 'e123',
          'ipClient': '1.11',
          'cpf': '312.123.223.11',
          'password': 'senha123'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parâmetro
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          //'Authorization': `Bearer ${token}`, // token inválido
          'Content-Type': 'application/json'
        },
        body: {
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          //'Authorization': `Bearer ${token}`, // token inválido
          'Content-Type': 'application/json'
        },
        body: {
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Medical Prescription - Remover Prescrição', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          prescriptionId: 1
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)

        const item = response.body;
        expect(item).to.have.property('flagDeError', false);
        expect(item).to.have.property('codigo', 201);
        expect(item).to.have.property('mensagem', 'Prescrição deletado com sucesso.');
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST', // Método divergente
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { //Sem parâmetro no body

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/medical-prescription', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Método divergente
        url: '/api/v1/attendance/plan/medical-prescription',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          prescriptionId: 1,

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Medical Prescription - Download do PDF', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/medical-prescription/pdf', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-prescription/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/medical-prescription/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-prescription/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // sem parametro como id e patientId 
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/medical-prescription/pdf', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/medical-prescription/pdf',
        headers: {
          //'Authorization': `Bearer ${token}`,  //token inválido
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/plan/medical-prescription/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE', // parâmetro divergente
        url: '/api/v1/attendance/plan/medical-prescription/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })

  describe('Atendimento Plano - Exam - Criar Exame', () => {

    it('Validar retorno 201 - /api/v1/attendance/plan/exam', () => { //Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          attendanceId: 1,
          clinicIndicated: 'Nome da clínica.',
          procedures: [
            {
              procedureId: 1234,
              procedureObs: 'Recomenda-se jejum de 12 horas.'
            }
          ],
          medicalClassificationIds: [
            2,
            3
          ],
          ipClient: '1.11',
          performaceTeste: true
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parâmetro
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/plan/exam',
        headers: {
          //'Authorization': `Bearer ${token}`, // token inválido
          'Content-Type': 'application/json'
        },
        body: {
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Parâmetro divergente
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Exam - Remover Exame', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          id: 1,
          ipClient: '1.11'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)

        const item = response.body;
        expect(item).to.have.property('flagDeError', false);
        expect(item).to.have.property('codigo', 201);
        expect(item).to.have.property('mensagem', 'Exame deletado com sucesso.');
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE',
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { //Sem parâmetro no body

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE', 
        url: '/api/v1/attendance/plan/exam',
        headers: {
          //'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          prescriptionId: 1,

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/plan/exam', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Método divergente
        url: '/api/v1/attendance/plan/exam',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          prescriptionId: 1,

        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(403)
      })
    })
  })

  describe('Atendimento Plano - Exam - Download do PDF', () => {

    it('Validar retorno 200 - /api/v1/attendance/plan/exam/pdf', () => {//Verificar depois

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/exam/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/plan/exam/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/exam/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' // sem parametro como id e patientId 
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(400)
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/plan/exam/pdf', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/plan/exam/pdf',
        headers: {
          //'Authorization': `Bearer ${token}`,  //token inválido
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/plan/exam/pdf', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE', // parâmetro divergente
        url: '/api/v1/attendance/plan/exam/pdf',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  })
})


describe('Módulo - Atendimentos', () => {

  beforeEach(() => {
    cy.login()
    cy.refreshToken()
  })

  describe('Atendimentos - Finish - Finalizar Atendimento', () => {

    it('Validar retorno 201 - /api/v1/attendance/finish', () => { // No parameters 

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/finish',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {

        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(201);
      })
    })

    it('Validar retorno 400 - /api/v1/attendance/finish', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/finish',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: { // Sem parâmetros

        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/finish', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST',
        url: '/api/v1/attendance/finish',
        headers: {
          // 'Authorization': `Bearer ${token}`, token inválido
          'Content-Type': 'application/json'
        },
        body: {

        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      })
    })

    it('Validar retorno 403 - /api/v1/attendance/finish', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET', // Método GET no lugar de POST
        url: '/api/v1/attendance/finish',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {

        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(403);
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/finish', () => {

      const token = Cypress.env('access_token');

      cy.request({
        method: 'DELETE', // Método DELETE no lugar de POST
        url: '/api/v1/attendance/finish',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: {

        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      })
    })
  })

  describe('Atendimentos - Profissional - {id} - Listar os atendimentos do profissional informado', () => {

    it('Validar retorno 200 - /api/v1/attendance/professional/{id}', () => { // Verificar depois

      const token = Cypress.env('acces_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/professional/:3601',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application-json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
      })
    })

    it('Validar retorno 401 - /api/v1/attendance/professional/{id}', () => {

      const token = Cypress.env('acces_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/professional/3601', // Passando Id profissional
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application-json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      })
    })

    it('Validar retorno 404 - /api/v1/attendance/professional/{id}', () => {

      const token = Cypress.env('acces_token');

      cy.request({
        method: 'POST', // Passando método
        url: '/api/v1/attendance/professional/{id}}',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application-json'
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      })
    })
  })
})


describe('Módulo - Modelo PDF de atendimento', () => {
  beforeEach(() => {
    cy.login()
    cy.refreshToken()
  })

  describe('Modelo PDF de atendimento - Modelo do atendimento médico em PDF', () => {

    it('Valdiar retorno 200 - /api/v1/attendance/modelo', () => { // Verificar Parâmetro id
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/modelo?agenamentoId=160831',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
      })
    })

    it('Valdiar retorno 400 - /api/v1/attendance/modelo', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'GET',
        url: '/api/v1/attendance/modelo', // Sem parâmetro
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      })
    })

    it('Valdiar retorno 404 - /api/v1/attendance/modelo', () => {
      const token = Cypress.env('access_token');

      cy.request({
        method: 'POST', // Método incorreto
        url: '/api/v1/attendance/modelo',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
      })
    })
  })



})









/*
POST /api/v1/attendance/plan/forwarding - OK falta 200
DELETE /api/v1/attendance/plan/forwarding - OK 
GET /api/v1/attendance/plan/forwarding/pdf?id= - OK falta 200
POST /api/v1/attendance/finish - OK falta 200
GET /api/v1/attendance/modelo?agenamentoId - OK falta 200
GET /api/v1/attendance/professional/:id  - OK falta 200

POST /api/v1/attendance/plan/medical-certificates - OK falta 200
DELETE /api/v1/attendance/plan/medical-certificates  - OK
GET /api/v1/attendance/plan/medical-certificates/pdf?id= - OK falta 200

POST /api/v1/attendance/plan/orientation  - OK falta 200
DELETE /api/v1/attendance/plan/orientation  - OK falta 200
GET /api/v1/attendance/plan/orientation/pdf?id=  - OK falta 200

POST /api/v1/attendance/plan/exam   - OK falta 200
DELETE /api/v1/attendance/plan/exam
GET /api/v1/attendance/plan/exam/pdf?id=   - OK falta 200

GET /api/v1/attendance/plan/medical-prescription/pdf?id-  - OK falta 200
POST /api/v1/attendance/plan/medical-prescription  - OK falta 200
DELETE /api/v1/attendance/plan/medical-prescription
 */
