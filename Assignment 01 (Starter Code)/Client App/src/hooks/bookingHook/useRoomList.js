import { useState, useCallback, useEffect } from "react";

const useRoomList = (rooms, parts) => {
  const [dividedRooms, setDividedRooms] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomErrors, setRoomErrors] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const divideRooms = useCallback((rooms, parts) => {
    const len = rooms.length;
    const size = Math.ceil(len / parts);
    const dividedRooms = [];
    for (let i = 0; i < parts; i++) {
      dividedRooms.push(rooms.slice(i * size, (i + 1) * size));
    }
    return dividedRooms;
  }, []);

  useEffect(() => {
    setDividedRooms(divideRooms(rooms, parts));
  }, [rooms, parts, divideRooms]);

  const handleRoomSelect = useCallback((roomId, roomNumberId, roomPrice) => {
    setSelectedRooms((prevRooms) => {
      const isSelected = prevRooms.some(
        (room) => room.room === roomId && room.roomNumber === roomNumberId,
      );
      let updatedRooms;
      if (isSelected) {
        updatedRooms = prevRooms.filter(
          (room) => !(room.room === roomId && room.roomNumber === roomNumberId),
        );
      } else {
        updatedRooms = [
          ...prevRooms,
          { room: roomId, roomNumber: roomNumberId, price: roomPrice },
        ];
      }

      const newTotalPrice = updatedRooms.reduce(
        (total, room) => total + room.price,
        0,
      );
      setTotalPrice(newTotalPrice);

      return updatedRooms;
    });

    setRoomErrors("");
  }, []);

  const validateRooms = useCallback(() => {
    if (selectedRooms.length === 0) {
      setRoomErrors("You must select at least one room.");
      return false;
    }
    setRoomErrors("");
    return true;
  }, [selectedRooms]);

  const isRoomSelected = useCallback(
    (roomId, roomNumberId) => {
      return selectedRooms.some(
        (room) => room.room === roomId && room.roomNumber === roomNumberId,
      );
    },
    [selectedRooms],
  );

  return {
    totalPrice,
    dividedRooms,
    selectedRooms,
    handleRoomSelect,
    roomErrors,
    validateRooms,
    isRoomSelected,
  };
};

export default useRoomList;
