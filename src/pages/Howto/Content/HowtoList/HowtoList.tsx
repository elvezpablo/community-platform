import * as React from 'react'
import { Link } from 'react-router-dom'
import { ClampLines } from '../../../../components/ClampLines/ClampLines'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CommentIcon from '@material-ui/icons/Comment'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import { theme } from '../../../../themes/app.theme'
import { IHowto } from 'src/models/models'

import Button from 'src/components/Button/Button'

const styles: any = {
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    padding: `${theme.spacing.unit * 4}px 0`,
    // [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    //   width: 1100,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}

interface IProps {
  allHowtos: IHowto[]
}
export class HowtoList extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    const { allHowtos } = this.props
    return (
      <div>
        <Typography
          style={{ margin: '30px auto', display: 'table' }}
          variant="h4"
          component="h4"
        >
          How-To
        </Typography>
        <Button
          to={`/how-to/create`}
          text={'create how-to'}
          addcontent="true"
          style={{ margin: '50px auto', display: 'block' }}
        />
        <React.Fragment>
          <div style={styles.layout}>
            {allHowtos.length === 0 ? (
              <LinearProgress />
            ) : (
              <Grid container spacing={40}>
                {allHowtos.map((howto: IHowto, index: number) => (
                  <Grid item key={index} xs={4}>
                    <Link
                      to={`/how-to/${encodeURIComponent(howto.slug)}`}
                      style={styles.link}
                    >
                      <Card
                        style={{
                          borderRadius: '0px',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <CardMedia
                          style={styles.cardMedia}
                          image={
                            howto.cover_image
                              ? howto.cover_image.downloadUrl
                              : howto.cover_image_url
                          } // eslint-disable-line max-len
                          title="Image title"
                        />
                        <CardContent style={styles.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {howto.tutorial_title}
                          </Typography>
                          <div>
                            <ClampLines
                              text={howto.tutorial_description}
                              lines={4}
                              ellipsis="..."
                              className="custom-class"
                            />
                          </div>
                          <Typography>by {howto.workspace_name}</Typography>
                        </CardContent>
                        <CardActions>
                          <Typography>PRECIOUS PLASTIC</Typography>
                          <div
                            style={{
                              marginLeft: 'auto',
                            }}
                          >
                            <IconButton>
                              <Typography style={{ marginRight: '5px' }}>
                                {Math.trunc(Math.random() * (60 - 4) + 4) + ' '}
                              </Typography>
                              <TurnedInIcon />
                            </IconButton>
                            <IconButton>
                              <Typography style={{ marginRight: '5px' }}>
                                {Math.trunc(Math.random() * (60 - 4) + 4) + ' '}
                              </Typography>
                              <CommentIcon />
                            </IconButton>
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          </div>
                        </CardActions>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
          {allHowtos.length > 15 ? (
            <Button
              to={`/how-to/create`}
              text={'create how-to'}
              addtutorial="true"
              style={{ margin: '50px auto', display: 'block' }}
            />
          ) : null}
        </React.Fragment>
      </div>
    )
  }
}