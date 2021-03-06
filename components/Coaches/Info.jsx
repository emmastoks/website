import React from 'react';
import Link from 'next/link';
import ExternalLink from '../UI/ExternalLink';

const Info = () => {
  return (
    <React.Fragment>
      <div className="grid-x grid-padding-x u-margin-large--tb align-middle">
        <div className="medium-8 large-5 cell">
          <p className="hero-text u-margin-large--b">
            You don&apos;t have to be a teacher or a project manager to share your knowledge. Got
            something to share?{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc Coaching" title="Coach at osoc">
              {/* className="link--strikethrough" */}
              Mail&nbsp;us
            </a>
          </p>
        </div>
        <div className="medium-8 large-5 cell large-offset-1">
          <p>
            Every student needs someone to teach them what cannot be taught in school. This is your
            chance to <strong>share your knowledge</strong>, give back to community, grow your skill
            set and expand your network.
          </p>
          <p>
            You&apos;ll be able to coach a diverse group of talented students &mdash; and you might
            wind up wanting to hiring one!
          </p>
          <p>
            <Link href="/practical">
              <a>Visit our FAQ</a>
            </Link>{' '}
            to learn more, or send us{' '}
            <a href="mailto:info@osoc.be?subject=Regarding osoc Coaching" title="Coach at osoc">
              a message
            </a>
            .
          </p>

          {/* <!--         <p class="u-margin-large--tb">
          <a class="button" href="mailto:info@osoc.be?subject=Regarding osoc Coaching" title="Coach at open summer of code">Mail us to apply</a>
        </p> --> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
