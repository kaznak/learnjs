
describe('LearnJS', function() {
    it('has view-container', function() {
	expect($('.view-container').length).toEqual(1);
    });

    it('can show a problem view', function() {
	learnjs.showView('#problem-1');
	expect($('.view-container .problem-view').length).toEqual(1);
    });
});
