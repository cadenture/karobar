import { Card, CardContent, Typography, Box, Avatar } from '@mui/material'
import { EmojiEvents as TrophyIcon } from '@mui/icons-material'

function WelcomeCard() {
  return (
    <Card elevation={3} sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <TrophyIcon />
          </Avatar>
          <Typography variant="h5" component="h2">
            Welcome to React Learning!
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          This is a custom component example. You can create reusable components
          like this to build your application.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default WelcomeCard

