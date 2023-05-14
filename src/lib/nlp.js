import { containerBootstrap } from '@nlpjs/core';
import { Nlp } from '@nlpjs/nlp';
import { LangEn } from '@nlpjs/lang-en-min';

const buildModel = async (_corpus) => {
  try {
    const container = await containerBootstrap();
    container.use(Nlp);
    container.use(LangEn);
    const nlp = container.get('nlp');
    nlp.settings.autoSave = false;
    await nlp.addCorpus(_corpus);
    await nlp.train();
    return nlp;
  } catch (_err) {
    return null;
  }
};

const inference = async (nlp, msg) => {
  try {
    const res = await nlp.process('en', msg);
    return res;
  } catch (_err) {
    return null;
  }
};

export {
  buildModel,
  inference,
};
