import {app,request, expect} from './config/helpers';


describe('Teste de integração',()=>{

    describe('GET /',()=>{
        it('Deve retornar a mensagem Hello World',done =>{
            request(app)
            .get('/')
            .end((error,res) =>{
                expect(res.status).to.equal(200)
                expect(res.text).to.be.eql('Hello World');
                done(error);
            })
        } )
    })

    describe('GET /ola/:nome',()=>{
        it('Deve retornar a mensagem Hello ,Typescript',done =>{
            const nome = 'Typescript';
            request(app)
            .get(`/ola/${nome}`)
            .end((error,res) =>{
                expect(res.status).to.equal(200)
                expect(res.text).to.be.eql('Hello ,Typescript');
                done(error);
            })
        } )
    })


    describe('GET /api/users/all',()=>{
        it('Deve retornar um Json com todos os usuários',done =>{
            request(app)
                .get('/api/users/all')
                .end((error,res)=>{
                    expect(res.status).to.equal(200);
                })
            
        });
    });
    describe('GET /api/users/:id',()=>{
        it('Deve retornar apenas um Json usuário',done =>{
            request(app)
            .get(`/api/users/${1}`)
            .end((error,res)=>{
                expect(res.status).to.equal(200);
            })
            
        });
    });
    describe('POST /api/users/new',()=>{
        it('Deve criar um usuário',done =>{
            const user = {
                nome : 'Teste'
            }
            request(app)
            .post('/api/users/new')
            .send(user)
            .end((error,res)=>{
                expect(res.status).to.equal(200);
            })
        });
    });
    describe('PUT /api/users/:id/edit',()=>{
        it('Deve atualizar um usuário',done =>{
            const user = {
                nome : 'TesteUpdate'
            }
            request(app)
            .put(`/api/users/${1}/edit`)
            .send(user)
            .end((error,res)=>{
                expect(res.status).to.equal(200);
            })
            
        });
    });
    describe('DELETE /api/users/:id',()=>{
        it('Deve deletar um usuário',done =>{
            request(app)
            .put(`/api/users/${1}`)
            .end((error,res)=>{
                expect(res.status).to.equal(200);
            })
            
        });
    });
});