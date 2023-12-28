/* 
 Penggunaaan pointer untuk beberapa env :

Environment	Global
===============|======
Web Browsers	this
Web Workers	self
Node.js         global


To standardize this, ES2020 introduced the "globalThis" that is available across environments.
 * 
 * 
 * 
 */


const canFetch = typeof globalThis.fetch === 'function';

console.log(canFetch);