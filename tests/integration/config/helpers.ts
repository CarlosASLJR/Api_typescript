import * as mocha from 'mocha';
import * as Chai from 'chai';
import * as td from 'testdouble';
const supertest = require('supertest');
import App from '../../../server/api/api';

const app = App;
const request = supertest;
const testDouble = td;
const expect = Chai.expect;

export {app,request,testDouble,expect};