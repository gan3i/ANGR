import {StrengthPipe} from "./strength.pipe";

describe('StrengthPipe', ()=>{

  it('should display weeak if the strngth is 5', ()=>{
  let pipe = new StrengthPipe();
  expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  it('should display strong if the strngth is 10', ()=>{
    let pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})
