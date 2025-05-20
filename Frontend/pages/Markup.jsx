import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Register from './Register';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';
import PrivateRoute from '../src/components/PrivateRoute';
import AddWorkout from './AddWorkout';
import WorkoutList from './WorkoutList';
import EditWorkout from './EditWorkout';

const Markup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/add-workout" element={<PrivateRoute><AddWorkout /></PrivateRoute>}/>
      <Route path="/workouts" element={<WorkoutList />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/edit-workout/:id" element={<EditWorkout />} />
      <Route path="*" element={<PageNotFound />} />


    </Routes>
  );
};

export default Markup;
