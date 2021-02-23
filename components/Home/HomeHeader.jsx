import HeroLink from './HeroLink';

const HomeHeader = () => {
  return (
    <React.Fragment>
      {/* <!-- hero --> */}
      <div className="hero-intro">
        <div className="grid-x grid-padding-x">
          <div className="medium-8 large-7 cell">
            <h2 className="hero-head">
              Here to accelarate societal change. 
              Cool stuff happens when you unite the power of tech with the power of the people.
            </h2>
          </div>
          <div className="medium-10 large-5 cell large-offset-1">
            <div className="osoc-float-element-o" />
            <div className="osoc-float-element-s" />
            <div className="osoc-float-element-o-small" />
            <div className="osoc-float-element-c" />
          </div>
        </div>
      </div>
      {/* <!-- links --> */}
      <div className="hero-themes">
        <div className="grid-x grid-padding-x grid-x--equal-height">
          <HeroLink href="/students" name="students" />
          <HeroLink href="/companies" name="companies" />
          <HeroLink href="/coaches" name="coaches" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
