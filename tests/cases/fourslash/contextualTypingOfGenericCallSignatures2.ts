/// <reference path='fourslash.ts'/>

////interface I {
////    <T>(x: T): void
////}
////function f6(x: <T extends I>(p: T) => void) { }
////// x can be contextually typed since inference applies to generic functions as well
////f6(/**/x => x<number>(10))

verify.quickInfoAt("", "(parameter) x: T extends I");
verify.numberOfErrorsInCurrentFile(0);
