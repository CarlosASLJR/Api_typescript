import * as HTTPStatus from 'http-status';
import {app,request, expect} from './config/helpers';


describe('Teste de integração',()=>{

    describe('GET /api/users/all',()=>{
        it('Deve retornar um Json com todos os usuários',done =>{
            request(app)
                .get('/api/users/all')
                .end((error,res)=>{
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });
    describe('GET /api/users/:id',()=>{
        it('Deve retornar apenas um Json usuário',done =>{
            request(app)
            .get(`/api/users/${1}`)
            .end((error,res)=>{
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
    describe('POST /api/users/create',()=>{
        it('Deve criar um usuário',done =>{
            const user = {
                nome : 'Teste'
            }
            request(app)
            .post('/api/users/create')
            .send(user)
            .end((error,res)=>{
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
    describe('PUT /api/users/:id/update',()=>{
        it('Deve atualizar um usuário',done =>{
            const user = {
                nome : 'TesteUpdate'
            }
            request(app)
            .put(`/api/users/${1}/update`)
            .send(user)
            .end((error,res)=>{
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
        });
    });
    describe('DELETE /api/users/:id/destroy',()=>{
        it('Deve deletar um usuário',done =>{
            request(app)
            .delete(`/api/users/${1}/destroy`)
            .end((error,res)=>{
                expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            })
       });
    });
});