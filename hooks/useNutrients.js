// hooks/useNutrients.js
import { useState, useMemo } from 'react';
import { Alert } from 'react-native';

export function useNutrients () {
  const [nutrients, setNutrients] = useState({
    carbs: { foods: [], total: 0 },
    protein: { foods: [], total: 0 },
    fats: { foods: [], total: 0 }
  });

  // Simple modal states
  const [nutrientModalVisible, setNutrientModalVisible] = useState(false);
  const [carbsFood, setCarbsFood] = useState("");
  const [carbs, setCarbs] = useState("");
  const [proteinFood, setProteinFood] = useState("");
  const [protein, setProtein] = useState("");
  const [fatsFood, setFatsFood] = useState("");
  const [fats, setFats] = useState("");

  // Advanced modal states
  const [nutModalVisible, setNutModalVisible] = useState(false);
  const [selectedNutrient, setSelectedNutrient] = useState('carbs');
  const [foodNameInput, setFoodNameInput] = useState('');
  const [foodGramInput, setFoodGramInput] = useState('');

  // Calculate totals and most consumed
  const totals = useMemo(
    () => ({
      carbs: nutrients.carbs.total,
      protein: nutrients.protein.total,
      fats: nutrients.fats.total,
    }),
    [nutrients]
  );

  const mostConsumed = useMemo(() => {
    const vals = Object.values(totals);
    const max = Math.max(...vals);
    if (max === 0) return 'None';
    if (totals.carbs === max) return 'Carbs';
    if (totals.protein === max) return 'Protein';
    return 'Fats';
  }, [totals]);

  // Save nutrients from simple modal
  const saveNutrients = () => {
    let hasData = false;

    // Save carbs if provided
    if (carbsFood.trim() && carbs && !isNaN(parseInt(carbs))) {
      const carbsValue = parseInt(carbs);
      setNutrients(prev => ({
        ...prev,
        carbs: {
          foods: [...prev.carbs.foods, { name: carbsFood.trim(), grams: carbsValue }],
          total: prev.carbs.total + carbsValue
        }
      }));
      hasData = true;
    }

    // Save protein if provided
    if (proteinFood.trim() && protein && !isNaN(parseInt(protein))) {
      const proteinValue = parseInt(protein);
      setNutrients(prev => ({
        ...prev,
        protein: {
          foods: [...prev.protein.foods, { name: proteinFood.trim(), grams: proteinValue }],
          total: prev.protein.total + proteinValue
        }
      }));
      hasData = true;
    }

    // Save fats if provided
    if (fatsFood.trim() && fats && !isNaN(parseInt(fats))) {
      const fatsValue = parseInt(fats);
      setNutrients(prev => ({
        ...prev,
        fats: {
          foods: [...prev.fats.foods, { name: fatsFood.trim(), grams: fatsValue }],
          total: prev.fats.total + fatsValue
        }
      }));
      hasData = true;
    }

    if (hasData) {
      // Clear inputs
      setCarbsFood('');
      setCarbs('');
      setProteinFood('');
      setProtein('');
      setFatsFood('');
      setFats('');
      
      setNutrientModalVisible(false);
      Alert.alert('Success', 'Nutrients saved successfully!');
    } else {
      Alert.alert('Error', 'Please fill in at least one food item with its nutrient value.');
    }
  };

  // Advanced modal functions
  const openNutModal = () => {
    setSelectedNutrient('carbs');
    setFoodNameInput('');
    setFoodGramInput('');
    setNutModalVisible(true);
  };

  const addFoodToNutrient = () => {
    const grams = parseInt(foodGramInput, 10);
    const name = (foodNameInput || '').trim();
    if (!name) {
      Alert.alert('Invalid', 'Please enter a food name.');
      return;
    }
    if (isNaN(grams) || grams <= 0) {
      Alert.alert('Invalid', 'Please enter a valid grams value (positive integer).');
      return;
    }

    setNutrients((prev) => {
      const copy = { ...prev };
      const list = [...copy[selectedNutrient].foods, { name, grams }];
      const total = copy[selectedNutrient].total + grams;
      copy[selectedNutrient] = { foods: list, total };
      return copy;
    });

    // clear inputs but keep modal open for more entries
    setFoodNameInput('');
    setFoodGramInput('');
  };

  const removeFood = (nutr, index) => {
    Alert.alert('Delete', 'Remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => {
          setNutrients((prev) => {
            const copy = { ...prev };
            const removed = copy[nutr].foods[index];
            const newFoods = copy[nutr].foods.filter((_, i) => i !== index);
            const newTotal = Math.max(0, copy[nutr].total - (removed?.grams || 0));
            copy[nutr] = { foods: newFoods, total: newTotal };
            return copy;
          });
        },
      },
    ]);
  };

  return {
    // State
    nutrients,
    totals,
    mostConsumed,
    
    // Simple modal
    nutrientModalVisible,
    carbsFood,
    carbs,
    proteinFood,
    protein,
    fatsFood,
    fats,
    setNutrientModalVisible,
    setCarbsFood,
    setCarbs,
    setProteinFood,
    setProtein,
    setFatsFood,
    setFats,
    saveNutrients,

    // Advanced modal
    nutModalVisible,
    selectedNutrient,
    foodNameInput,
    foodGramInput,
    setNutModalVisible,
    setSelectedNutrient,
    setFoodNameInput,
    setFoodGramInput,
    openNutModal,
    addFoodToNutrient,
    removeFood,
  };
};