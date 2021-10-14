import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProgress } from "../Redux/Actions/progress";
import { initializeCart } from "../Redux/Actions/cart"
import { fetchFeed } from '../Redux/Actions/feed';
import { initializePerson } from '../Redux/Actions/person';

export default function useDataLoader({ progress, cart, feed, person }) {
  const d = useDispatch();

  useEffect(() => {
    if(progress) d(fetchProgress());
    if(feed) d(fetchFeed());
    if(cart) d(initializeCart());
    if(person) d(initializePerson());
  }, []);
}
