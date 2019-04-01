const path = require('path');
const fs = require('fs');
const htmlToText = require('html-to-text');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { mail } = require('../services/mail');
const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf8');

const emailFrom = process.env.MAIL_FROM;
const siteName = process.env.HTTP_NAME;

/**
 * Replace data in template
 * @param templatePath {string}
 * @param replacements {object}
 * @returns {string}
 */
const createHtml = (html, replacements) => {
  Object.keys(replacements).forEach((k) => {
    html = html.replace(new RegExp(`:${k}`, 'gi'), replacements[k]);
  });
  return html;
};
/**
 * Send registration email
 * @param email {string}
 */
exports.sendOnRegistrationLetter = (email) => {
  const message = 'Thank you for registering with UNO Luxury Store!\n From now on you will get regular updates on store promotions and sales making your shopping experience much easier.';
  const hello = 'Hi,';
  const html = createHtml(template, { hello, message, emailFrom, email, siteName });

  return mail(
    emailFrom,
    email,
    `Thank you for Signing Up at ${siteName}`,
    htmlToText.fromString(html, { wordwrap: 130 }),
    html
  );
};
/**
 * Send restore password link
 * @param email {string}
 * @param number {string}
 */
exports.sendOnNewOrderLetter = (email, number) => {
  const hello = 'Dear Customer,';
  const message = 'Thank you for shopping at UNO Luxury Store!\n Your order #:number has been received.  You are always able to review your order on UNO website in the Order History Section of your Profile. Thanks again and see you soon!';
  const html = createHtml(template, { hello, message, number, emailFrom, siteName});

  return mail(
    emailFrom,
    email,
    `Thank you for shopping at ${siteName}`,
    htmlToText.fromString(html, { wordwrap: 130 }),
    html
  );
};
/**
 * Send new order confirmation letter
 * @param email {string}
 * @param link {string}
 * @param time {string}
 */
exports.sendOnRestorePasswordLetter = (email, link, time) => {
  const hello = 'Dear Customer,';
  const message = `This is a temporary link to restore forgotten password: <a href="${siteName}:link">:link</a>, It is valid till :time. \n If you did not request to restore password just ignore this letter.`;
  const html = createHtml(template, { hello, message, link, time, emailFrom, siteName });

  return mail(
    emailFrom,
    email,
    `Thank you for shopping at ${siteName}`,
    htmlToText.fromString(html, { wordwrap: 130 }),
    html
  );
};