/*
 *  Khan Academy Feedback Framework, version 1.0.0
 *  Created by aguzmanballen on 3/7/15.
 *
 * Project-based JavaScript Interview
 * This is a new interview format that we’re trying out, you can find more details here:
 * http://ejohn.org/blog/project-based-interviews/
 *
 * Feel free to put up the project code wherever you wish. If you already have private github repos
 * available to you, feel free to share with us that way and give access to the user ka-interview.
 * You can also use a public repo. Sending a zip file is fine too. Please under no circumstances pay
 * for a new private repo just to send us your work!
 *
 * Ideally this shouldn’t take you more than a couple days, in your spare time, to complete. Don’t feel
 * compelled to try and complete everything. Just do what you can and if you have thoughts on the parts
 * that you didn’t complete, that’s fine. If you’re tight for time just let me know and we can easily
 * rearrange the schedule.
 *
 * If you have any questions, please feel free to send Kayla a message and we’ll try to help you as best
 * as we can!
 *
 * Building a Challenge Framework
 *
 * We want to analyze student-generated JavaScript code (for our CS platform: https://www.khanacademy.org/cs)
 * and determine if certain aspects of their code is written as expected. We want this so that we can provide
 * advanced unit testing for a student's program - be able to provide them with informed feedback (that's
 * better than what normal unit testing can provide, but likely not as good as what a human could provide).
 *
 * We'd like to be able to have a few testing APIs to work with, namely:
 *   •	A whitelist of specific functionality. For example, the ability to say "This program MUST use a
 *      'for loop' and a 'variable declaration'."
 *   •	A blacklist of specific functionality. For example, the ability to say "This program MUST NOT use a
 *      'while loop' or an 'if statement'."
 *   •	Determine the rough structure of the program. For example, "There should be a 'for loop' and inside
 *      of it there should be an 'if statement'."
 *
 * To do this we'll need to parse the JavaScript code. The best way to do this is to use a full-blown
 * JavaScript parser. There are two good parsers out there, Esprima and Acorn. Use one of them to parse some
 * JavaScript code and implement the testing API specified above.
 *
 * Esprima: http://esprima.org/
 * Acorn: http://marijnhaverbeke.nl/acorn/
 *
 * 1) Look at Esprima and Acorn. They both have similar APIs and produce identical (or near-identical) output
 *    (an Abstract Syntax Tree of the JavaScript code). With that being said you should make a decision to
 *    choose one of them. You'll probably want to look at performance, file size, API quality, and documentation.
 *    Provide justification for why you made your decision.
 *
 *      Esprima:
 *      - Performance:
 *        + Not as fast as Acorn
 *      - File Size:
 *        + 58 MB
 *      - API Quality:
 *        + Easy to use
 *        + Easily scalable
 *          > Runs on IE 8+ and modern browsers
 *        + Fulfills the purpose
 *        + Easy to maintain and upgrade the code
 *      - Documentation:
 *        + Better than Acorn
 *          > Easier to read through
 *          > More examples
 *
 *      Acorn:
 *      - Performance:
 *        + Faster than Esprima
 *      - File Size:
 *        + 2 MB
 *      - API Quality:
 *        + Easy to use
 *        + Easily scalable
 *          > Runs on any browser more recent than IE 5
 *        + Fulfills the purpose
 *        + Easy to maintain and upgrade the code
 *      - Documentation:
 *        + Not as great as Esprima
 *        > Harder to find relevant information
 *
 *    Conclusion: going to use Acorn because it's faster, robust, up-to-date with contributing community, also
 *    well documented
 *
 * 2) We want to support modern versions of Firefox, Chrome, and Safari and IE 8+. That being said IE 8
 *    and 9 do not have to have the best performance, it just has to work (even if it works poorly). With that
 *    in mind follow the next steps and make sure whichever parsing tool you chose will work in the browsers
 *    that you want to support.ww
 *
 * 3) Design and create a testing API that can take in a string of JavaScript code, parse it, and provide feedback
 *    based upon it. You should have three possible testing methods (based upon the above-listed qualifications).
 *
 * 4) Create an HTML textarea and hook it up so that when a user types code any associated tests (written using the
 *    above) are run automatically. Display the results of the test run somewhere on the web page so that the user
 *    can see how they're doing. You’re free to use any JavaScript you wish to wire up the textarea to the tester.
 *
 *    (Optional) Use a nice code editor, like Ace or CodeMirror, instead of a textarea.
 *
 * 5) Make sure that the textarea is not blocking, or slowing down, user input. Use whatever tools you can to
 *    make sure that the tests are run in a non-blocking way in as many browsers as possible (may not be
 *    possible in older browsers).
 *
 */

function KAFeedbackFramework() {

}

function KAFeedbackFramework(whiteList, blackList) {
    this.whiteList = whiteList;
    this.blackList = blackList;

}

function KAFeedbackFramework(whiteList, blackList, codeStructure) {
    this.whiteList = whiteList;
    this.blackList = blackList;
    this.codeStructure = codeStructure;

}

KAFeedbackFramework .prototype  .initializeWhiteList = function(whiteList) {
    this.whiteList = whiteList;
}

KAFeedbackFramework .prototype  .initializeBlackList = function(blackList) {
    this.blackList = blackList;
}

KAFeedbackFramework .prototype  .initializeCodeStructure = function(codeStructure) {
    this.codeStructure = codeStructure;
}

/*
 *  Function: analyzeTextEditorString
 *  Parameters:
 *  Returns:
 *
 */
KAFeedbackFramework .prototype  .testCodeForWhiteListElements = function(textEditorString) {
    return this.whiteList;
}

KAFeedbackFramework .prototype  .testCodeForBlackListElements = function(textEditorString) {
    return this.blackList;
}

KAFeedbackFramework .prototype  .testCodeForCorrectStructure = function(textEditorString) {
    return this.codeStructure;
}