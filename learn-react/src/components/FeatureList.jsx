import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { 
  Check as CheckIcon 
} from '@mui/icons-material'

function FeatureList() {
  const features = [
    'Component-based architecture',
    'React Hooks for state management',
    'Material UI for beautiful design',
    'Vite for fast development',
    'Hot Module Replacement (HMR)',
  ]

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        What You&apos;ll Learn
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckIcon color="success" />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default FeatureList

