import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Submission } from 'snoowrap';
import styles from './submission-card-content.module.css';

const getEmberIdFromThumbnail = (thumbnailUrl: string): string => {
  return (thumbnailUrl.split('vi/')[1] ?? '').split('/')[0];
};

const SubmissionCardTextContent = (props: { submission: Submission }) => {
  return (
    <CardContent>
      <Typography>{props.submission.selftext}</Typography>
    </CardContent>
  );
};

const SubmissionCardImageContent = (props: { submission: Submission }) => {
  const firstImage = props.submission.preview?.images[0];
  return <CardMedia component="img" image={firstImage.source.url} />;
};

const SubmissionCardYoutubeMediaContent = (props: { submission: Submission }) => {
  const media = props.submission.media?.oembed;
  const embedId = getEmberIdFromThumbnail(media?.thumbnail_url ?? '');
  const videoSrc = `https://www.youtube.com/embed/${embedId}`;
  return (
    <div className={styles['submission-card-video-content']}>
      <iframe
        src={videoSrc}
        title={media?.title}
        width="853"
        height="480"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};

const SubmissionCardTwitterMediaContent = (props: { submission: Submission }) => {
  const media = props.submission.media?.oembed;
  const twitterUrl = (media as any).url;
  return (
    <>{twitterUrl}</>
  );
};

const SubmissionCardRedditVideoMediaContent = (props: { submission: Submission }) => {
  const media = props.submission.media?.reddit_video;
  return (
    <div className={styles['submission-card-video-content']}>
      <video controls src={media?.fallback_url} />
    </div>
  );
}

const SubmissionCardMediaContent = (props: { submission: Submission }) => {
  const isRedditVideo = !!props.submission.media?.reddit_video;
  if (isRedditVideo) {
    return <SubmissionCardRedditVideoMediaContent submission={props.submission} />;
  }
  const mediaType = props.submission.media?.type;
  switch (mediaType) {
    case 'youtube.com':
      return <SubmissionCardYoutubeMediaContent submission={props.submission} />;
    case 'twitter.com':
      return <SubmissionCardTwitterMediaContent submission={props.submission} />;
    default:
      return <p>Not supported media type.</p>;
  }
};

const SubmissionCardGalleryContent = (_props: { submission: Submission }) => {
  return <p>Gallery content</p>;
};

export const SubmissionCardContent = (props: { submission: Submission }) => {
  console.log(props.submission);
  const hasMedia = !!props.submission.media;
  const hasGallery = !!(props.submission as any).media_metadata;
  const hasPreviews = props.submission.preview?.images?.length > 0;
  if (hasMedia) {
    return <SubmissionCardMediaContent submission={props.submission} />;
  }
  if (hasGallery) {
    return <SubmissionCardGalleryContent submission={props.submission} />;
  }
  if (hasPreviews) {
    return <SubmissionCardImageContent submission={props.submission} />;
  }
  return <SubmissionCardTextContent submission={props.submission} />;
};
