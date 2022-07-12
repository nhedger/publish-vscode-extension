import { setFailed } from '@actions/core';
import { resolve } from 'path';
import { input } from './utils';
import { publishVSIX } from 'vsce';
import { cwd } from 'process';

const run = async () => {
  const vsix = resolve(cwd(), input('vsix'));

  try {
    await publishVSIX(vsix);
    //setOutput('publishedExtensionURL', url);
  } catch (error) {
    setFailed(error);
  }
};

run();
