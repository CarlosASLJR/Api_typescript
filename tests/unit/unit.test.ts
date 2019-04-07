import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';
const model = require('../../server/models');

describe('Testes Unit�rios do Service', () => {

  let email;
  let _id;

  const defaultUser = {
    id: 1,
    name: 'Default User',
    email: 'defaultuser@email.com',
    password: '1234'
  }

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      const user = new User();
      user.create(defaultUser).then(() => {
        console.log(`Default User created`)
        done();
      });
    })
  });

  describe('M�todo Create', () => {
    it('Deve criar um novo Usu�rio', () => {
      const user = new User();
      return user.create({
          id: 2,
          name: 'Novo Usuario',
          email: 'novousuario@email.com',
          password: '1234'
      })
      .then(data => {
        expect(data.dataValues).to.have.all.keys(
          ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
        )
      });
    });
  })

  describe('M�todo Update', () => {
    it('Deve atualizar um Usu�rio', () => {
      const usuarioAtualizado = {
        name: 'Nome Atualizado',
        email: 'atualizado@email.com'
      };
      const user = new User();
      return user
              .update(defaultUser.id, usuarioAtualizado)
              .then(data => {
                expect(data[0]).to.be.equal(1);
              })
            });
    });

  describe('M�todo GET Users', () => {
    it('Deve retornar uma lista com todos os Usu�rios', () => {
      const user = new User();
      return user.getAll().then(data => {
        expect(data).to.be.an('array');
      })
    })
  });

  describe('M�todo getById', () => {
    it('Retornar um Usu�rio de acordo com o ID passado', () => {
      //Deve implementar a l�gica do teste.
      const user = new User();
        return user.getById(defaultUser.id).then(data => {
            expect(data).to.have.all.keys(
              ['email', 'id', 'name', 'password']
            )
        })
    })
  })

  describe('M�todo getByEmail', () => {
    it('Retornar um Usu�rio de acordo com o EMAIL passado', () => {
      //Deve implementar a lógica do teste.
      const user = new User();
        return user.getByEmail(defaultUser.email).then(data => {
          expect(data).to.have.all.keys(
            ['email', 'id', 'name', 'password']
          )
        })
    })
  })

  describe('M�todo Delete', () => {
    it('Deve deletar um Usu�rio', () => {
      const user = new User();
      return user.delete(defaultUser.id).then(data => {
        console.log(data)
        // expect(data).to.be.equal(1);
      })
    });
  });

});
