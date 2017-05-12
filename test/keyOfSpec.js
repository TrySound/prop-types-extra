import keyOf from '../src/keyOf';
import { isChainableAndUndefinedOK } from './helpers.js';

describe('keyOf', () => {
  const obj = { foo: 1 };
  function validate(prop) {
    return keyOf(obj)({ p: prop }, 'p', 'Component');
  }

  isChainableAndUndefinedOK(keyOf(obj));

  it('Should return error with non-key values', () => {
    const err = validate('bar');
    assert.instanceOf(err, Error);
    assert.include(err.message, 'expected one of ["foo"]');
  });

  it('Should validate OK with key values', () => {
    assert.isNull(validate('foo'));
    obj.bar = 2;
    assert.isNull(validate('bar'));
  });
});
