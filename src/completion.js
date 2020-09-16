// imports
const vscode = require('vscode');
const docs = require('../docs/DataSetDoc');

// get lua keyword list
function getKeywordsWithDot () {
    const { withDot: copy } = docs;
    return new Promise(function (resolve) {
        resolve(copy.map((item) => item.prefix));
    });
}

// get xmake command list
function getKeywordsWithoutDot () {
    const { withoutDot: copy } = docs;
    return new Promise(function (resolve) {
        // the default xmake command list
        const defaultCmds = copy.map((item) => item.prefix);
        // TODO: get commands from `xmake man --commands-list`
        resolve(defaultCmds);
    });
}

function wordContains (word, pattern) {
    return word.indexOf(pattern) > -1;
}

// insert lua keyword text
function insertKeyword (word, mode = 'noDot', index) {
    const { withoutDot, withDot } = docs;
    const snippets = {};
    if (mode.indexOf('dot') !== -1) {
        withDot.forEach((item, objIndex) => {
            snippets[`${item.prefix}-${objIndex}`] = item;
        });
    } else {
        withoutDot.forEach((item, objIndex) => {
            snippets[`${item.prefix}-${objIndex}`] = item;
        });
    }

    return snippets[`${word}-${index}`] ? {
        type: snippets[`${word}-${index}`].type,
        snippets: snippets[`${word}-${index}`].body.join('\n'),
        detail: snippets[`${word}-${index}`].description,
        docs: snippets[`${word}-${index}`].docs || null,
    } : {
            snippets: word + ' ${1}',
            detail: null,
            docs: null,
        };
}

// get suggestions
function getSuggestions (cmdlist, currentWord, kind, insertText, matchPredicate, mode = 'notDot') {
    return new Promise(function (resolve, reject) {
        cmdlist.then(function (stdout) {
            // match suitable commands 
            let commands = stdout.map((cmd, index) => ({ cmd, index })).filter(function ({ cmd }) {
                return matchPredicate(cmd, currentWord)
            });
            if (commands.length > 0) {
                // make suggestions from commands
                let suggestions = commands.map(function ({ cmd, index }) {
                    // make completion item
                    let item = new vscode.CompletionItem(cmd);
                    item.kind = kind;
                    if (insertText == null || insertText == '') {
                        item.insertText = cmd;
                    } else {
                        const { snippets, detail, docs, type } = insertText(cmd, mode, index);
                        item.kind = type || kind;
                        item.insertText = new vscode.SnippetString(snippets);
                        item.documentation = new vscode.MarkdownString(docs);
                        item.detail = detail;
                    }
                    return item;
                });
                resolve(suggestions);
            } else {
                resolve([]);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}

// get lua keywords suggestions from the given word
function getKeywordsWithDotSuggestions (word) {
    let cmd = getKeywordsWithDot();
    return getSuggestions(cmd, word, vscode.CompletionItemKind.Field, insertKeyword, wordContains, 'dot');
}

// get xmake commands suggestions from the given word
function getKeywordsWithoutDotSuggestions (word) {
    let cmd = getKeywordsWithoutDot();
    return getSuggestions(cmd, word, vscode.CompletionItemKind.Function, insertKeyword, wordContains);
}

function provideCompletionItems (document, position, token, mode = '') {

    // get the current word
    let wordAtPosition = document.getWordRangeAtPosition(position);
    let currentWord = '';
    if (wordAtPosition && wordAtPosition.start.character < position.character) {
        let word = document.getText(wordAtPosition);
        currentWord = word.substr(0, position.character - wordAtPosition.start.character);
    }

    // get suggestion results
    if (currentWord.indexOf(mode)) {
        return new Promise(function (resolve, reject) {
            getKeywordsWithDotSuggestions(currentWord).then(function (results) {
                let suggestions = Array.prototype.concat.apply([], results);
                resolve(suggestions);
            }).catch((err) => {
                reject(err)
            })
        })
    }
    return new Promise(function (resolve, reject) {
        getKeywordsWithoutDotSuggestions(currentWord).then(function (results) {
            let suggestions = Array.prototype.concat.apply([], results);
            resolve(suggestions);
        }).catch((err) => {
            reject(err);
        });
    });
}
// resolve completion item
// eslint-disable-next-line no-unused-vars
function resolveCompletionItem (item, token) {
    return null;
}

module.exports = function (context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider([
            'javascript', 'javascriptreact', 'typescript', 'typescriptreact',
        ], {
            provideCompletionItems: (document, position, token) => provideCompletionItems(document, position, token),
            resolveCompletionItem,
        }),
        vscode.languages.registerCompletionItemProvider([
            'javascript', 'javascriptreact', 'typescript', 'typescriptreact',
        ], {
            provideCompletionItems: (document, position, token) => provideCompletionItems(document, position, token, '.'),
            resolveCompletionItem,
        }, '.'),
    );
};