
import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './homeStyle';
import FeatureCards from '../../components/featureCard/featureCard';


import { useCalories } from '../../hooks/useCalories';
import { useHydration } from '../../hooks/useHydration';
import { usePoop } from '../../hooks/usePoop';
import { useNutrients } from '../../hooks/useNutrients';
import { Modals } from '../../components/modalsComponent';
import { SummarySection } from '../../components/summaryComponent';

const Homepage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // All hooks
  const calories = useCalories();
  const hydration = useHydration();
  const poop = usePoop();
  const nutrients = useNutrients();

  // Render helper for nutrients modal
  const renderFoodsList = (nutr) => {
    const data = nutrients.nutrients[nutr].foods;
    if (!data.length) return <Text style={styles.smallNote}>No foods yet.</Text>;
    return (
      <FlatList
        data={data}
        keyExtractor={(_, i) => `${nutr}-${i}`}
        renderItem={({ item, index }) => (
          <View style={styles.nutFoodRow}>
            <Text style={styles.nutFoodText}>
              {item.name} — {item.grams}g
            </Text>
            <TouchableOpacity onPress={() => nutrients.removeFood(nutr, index)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5530" />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Qaonako 🌱</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>

        {/* Main Interactive Summary */}
        <SummarySection
          calories={calories.calories}
          caloriesPct={calories.caloriesPct}
          hydration={hydration.hydration}
          hydrationPct={hydration.hydrationPct}
          lastPoopTime={poop.lastPoopTime}
          totals={nutrients.totals}
          mostConsumed={nutrients.mostConsumed}
          onCaloriesPress={() => calories.setCalModalVisible(true)}
          onPoopPress={poop.openPoopModalInit}
          onNutrientsPress={() => nutrients.setNutrientModalVisible(true)}
          onHydrationIncrement={hydration.incrementHydration}
          onHydrationDecrement={hydration.decrementHydration}
          formatTimeObj={poop.formatTimeObj}
        />
        <View style={{ height: 20 }} />
      </ScrollView>

      {/* All Modals */}
      <Modals
        // Calories modal props
        calModalVisible={calories.calModalVisible}
        calInput={calories.calInput}
        setCalInput={calories.setCalInput}
        setCalModalVisible={calories.setCalModalVisible}
        saveCalories={calories.saveCalories}
         caloriesStyles={calories.styles}
        
        // Poop modal props
        poopModalVisible={poop.poopModalVisible}
        poopHour={poop.poopHour}
        poopMinute={poop.poopMinute}
        poopAMPM={poop.poopAMPM}
        setPoopHour={poop.setPoopHour}
        setPoopMinute={poop.setPoopMinute}
        setPoopAMPM={poop.setPoopAMPM}
        setPoopModalVisible={poop.setPoopModalVisible} // FIXED: Now passes the actual function
        savePoopTime={poop.savePoopTime}
        
        // Simple nutrients modal props
        nutrientModalVisible={nutrients.nutrientModalVisible}
        carbsFood={nutrients.carbsFood}
        carbs={nutrients.carbs}
        proteinFood={nutrients.proteinFood}
        protein={nutrients.protein}
        fatsFood={nutrients.fatsFood}
        fats={nutrients.fats}
        setCarbsFood={nutrients.setCarbsFood}
        setCarbs={nutrients.setCarbs}
        setProteinFood={nutrients.setProteinFood}
        setProtein={nutrients.setProtein}
        setFatsFood={nutrients.setFatsFood}
        setFats={nutrients.setFats}
        setNutrientModalVisible={nutrients.setNutrientModalVisible}
        saveNutrients={nutrients.saveNutrients}
        
        // Advanced nutrients modal props
        nutModalVisible={nutrients.nutModalVisible}
        selectedNutrient={nutrients.selectedNutrient}
        foodNameInput={nutrients.foodNameInput}
        foodGramInput={nutrients.foodGramInput}
        setSelectedNutrient={nutrients.setSelectedNutrient}
        setFoodNameInput={nutrients.setFoodNameInput}
        setFoodGramInput={nutrients.setFoodGramInput}
        setNutModalVisible={nutrients.setNutModalVisible}
        addFoodToNutrient={nutrients.addFoodToNutrient}
        renderFoodsList={renderFoodsList}
        totals={nutrients.totals}
      />
      <FeatureCards/>
    </SafeAreaView>

    
  );
};

export default Homepage;