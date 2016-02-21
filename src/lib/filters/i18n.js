import _ from 'lodash';
import { DEFAULT_LANG } from '../../constants';
export default function (){
  const defaultLang = DEFAULT_LANG;
  const langTable = {
    login: {
      en_US: 'login',
      es_ES: 'login',
      pt_BR: 'login'
    },
    email: {
      en_US: 'email',
      es_ES: 'email',
      pt_BR: 'email',
      placeholder: {
        en_US: 'e-mail address',
        es_ES: 'e-mail',
        pt_BR: 'enderço de email',
      }
    },
    password: {
      en_US: 'password',
      es_ES: 'password',
      pt_BR: 'password',
      placeholder: {
        en_US: 'password',
        es_ES: 'password',
        pt_BR: 'password',
      }
    }
  };

  return (ref, lang) => {
    return _.get(langTable, ref+'.'+(lang || defaultLang)) || ref;
  };
}
