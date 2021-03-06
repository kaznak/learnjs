
describe('LearnJS', function() {
    it('can show a problem view', function() {
	learnjs.showView('#problem-1');
	expect($('.view-container .problem-view').length).toEqual(1);
    });

    it('show the landing page view when there is no hash', function() {
	learnjs.showView('');
	expect($('.view-container .landing-view').length).toEqual(1);
    });

    it('pass the hash view paramater to the view function', function() {
	spyOn(learnjs, 'problemView');
	learnjs.showView('#problem-42');
	expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });

    describe('problem view', function() {
	it('has a title that includes the problem number', function() {
	    var view = learnjs.problemView('1');
	    expect(view.text()).toEqual('Problem #1 Coming soon!');
	});
    });

    it('invokes the route when loaded', function() {
	spyOn(learnjs, 'showView');
	learnjs.appOnReady();
	expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });

    it('subscribe to the hash change event', function() {
	learnjs.appOnReady();
	spyOn(learnjs, 'showView');
	$(window).trigger('hashchange');
	expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
    });
});
