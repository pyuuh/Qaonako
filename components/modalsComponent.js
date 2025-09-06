// components/Modals.js
import React from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../pages/homePage/homeStyle';
import { poopStyles, nutrientStyles, getNutrientColor } from './styleComponents';

export const Modals = ({
  // Calories modal
  calModalVisible,
  calInput,
  setCalInput,
  setCalModalVisible,
  saveCalories,
  
  // Calorie styles from hook
  caloriesStyles,
  
  // Poop modal
  poopModalVisible,
  poopHour,
  poopMinute,
  poopAMPM,
  setPoopHour,
  setPoopMinute,
  setPoopAMPM,
  setPoopModalVisible,
  savePoopTime,
  
  // Nutrients modal
  nutrientModalVisible,
  carbsFood,
  carbs,
  proteinFood,
  protein,
  fatsFood,
  fats,
  setCarbsFood,
  setCarbs,
  setProteinFood,
  setProtein,
  setFatsFood,
  setFats,
  setNutrientModalVisible,
  saveNutrients,
  
  // Advanced nutrients modal
  nutModalVisible,
  selectedNutrient,
  foodNameInput,
  foodGramInput,
  setSelectedNutrient,
  setFoodNameInput,
  setFoodGramInput,
  setNutModalVisible,
  addFoodToNutrient,
  renderFoodsList,
  totals,

  hydration,                  // number - current hydration count (e.g. 3)
  incrementHydration,         // fn - increases hydration by 1
  decrementHydration,         // fn - decreases hydration by 1 (min 0)
}) => {
  return (
    <>
      {/* Calories Modal - NOW USING CALORIE STYLES */}
      <Modal visible={calModalVisible} transparent animationType="slide">
        <View style={caloriesStyles?.modalOverlay || styles.modalContainer}>
          <View style={caloriesStyles?.modalContainer || styles.modalContent}>
            <Text style={caloriesStyles?.modalTitle || styles.modalTitle}>Set Calories (kcal)</Text>
            <View style={caloriesStyles?.inputContainer}>
              <Text style={caloriesStyles?.inputLabel}>Enter calories consumed:</Text>
              <TextInput
                style={caloriesStyles?.textInput || styles.modalInput}
                placeholder="e.g. 1240"
                keyboardType="numeric"
                value={calInput}
                onChangeText={setCalInput}
              />
            </View>
            <View style={caloriesStyles?.buttonContainer || styles.modalBtnRow}>
              <TouchableOpacity 
                style={[caloriesStyles?.button, caloriesStyles?.saveButton]} 
                onPress={saveCalories}
              >
                <Text style={caloriesStyles?.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[caloriesStyles?.button, caloriesStyles?.cancelButton]} 
                onPress={() => setCalModalVisible(false)}
              >
                <Text style={caloriesStyles?.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
  <Text>Save</Text>


      {/* Poop Time Modal */}
<Modal visible={poopModalVisible} transparent animationType="slide">
  <View style={poopStyles.modalOverlay}>
    <View style={poopStyles.modalContainer}>
      <Text style={poopStyles.modalTitle}>Set Last Poop Time</Text>
      
      {/* Time Input Section */}
      <View style={poopStyles.timeInputContainer}>
        
        {/* Hour Input */}
        <View style={poopStyles.timeInputSection}>
          <Text style={poopStyles.inputLabel}>Hour</Text>
          <TextInput
            style={poopStyles.timeInput}
            keyboardType="numeric"
            value={String(poopHour)}
            onChangeText={(v) => {
              let n = parseInt(v || '0', 10);
              if (isNaN(n)) n = 1;
              if (n < 1) n = 1;
              if (n > 12) n = 12;
              setPoopHour(n);
            }}
          />
        </View>

        {/* Separator */}
        <View style={poopStyles.timeSeparator}>
          <Text style={poopStyles.separatorText}>:</Text>
        </View>

        {/* Minute Input */}
        <View style={poopStyles.timeInputSection}>
          <Text style={poopStyles.inputLabel}>Minute</Text>
          <TextInput
            style={poopStyles.timeInput}
            keyboardType="numeric"
            value={String(poopMinute).padStart(2, '0')}
            onChangeText={(v) => {
              let n = parseInt(v || '0', 10);
              if (isNaN(n)) n = 0;
              if (n < 0) n = 0;
              if (n > 59) n = 59;
              setPoopMinute(n);
            }}
          />
        </View>
      </View>

      {/* AM/PM Selector */}
      <View style={poopStyles.periodContainer}>
        <Text style={poopStyles.inputLabel}>Period</Text>
        <View style={poopStyles.periodSelector}>
          <TouchableOpacity 
            onPress={() => setPoopAMPM('AM')} 
            style={[
              poopStyles.periodButton,
              poopAMPM === 'AM' ? poopStyles.periodButtonActive : poopStyles.periodButtonInactive
            ]}
          >
            <Text style={[
              poopStyles.periodButtonText,
              poopAMPM === 'AM' ? poopStyles.periodButtonTextActive : poopStyles.periodButtonTextInactive
            ]}>
              AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setPoopAMPM('PM')} 
            style={[
              poopStyles.periodButton,
              poopAMPM === 'PM' ? poopStyles.periodButtonActive : poopStyles.periodButtonInactive
            ]}
          >
            <Text style={[
              poopStyles.periodButtonText,
              poopAMPM === 'PM' ? poopStyles.periodButtonTextActive : poopStyles.periodButtonTextInactive
            ]}>
              PM
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={poopStyles.buttonContainer}>
        <TouchableOpacity 
          style={[poopStyles.button, poopStyles.saveButton]} 
          onPress={savePoopTime}
        >
          <Text style={poopStyles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[poopStyles.button, poopStyles.cancelButton]} 
          onPress={() => setPoopModalVisible(false)}
        >
          <Text style={poopStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

{/* Simple Nutrient Modal - Using existing styles only */}
<Modal
  visible={nutrientModalVisible}
  animationType="slide"
  transparent={true}
  onRequestClose={() => setNutrientModalVisible(false)}
>
  <View style={poopStyles.modalOverlay}>
    <View style={poopStyles.modalContainer}>
      <Text style={poopStyles.modalTitle}>Log Nutrients</Text>

      <TextInput
        style={poopStyles.timeInput}
        placeholder="Food for Carbs"
        value={carbsFood}
        onChangeText={setCarbsFood}
      />
      <TextInput
        style={poopStyles.timeInput}
        placeholder="Carbs (g)"
        keyboardType="numeric"
        value={carbs}
        onChangeText={setCarbs}
      />

      <TextInput
        style={poopStyles.timeInput}
        placeholder="Food for Protein"
        value={proteinFood}
        onChangeText={setProteinFood}
      />
      <TextInput
        style={poopStyles.timeInput}
        placeholder="Protein (g)"
        keyboardType="numeric"
        value={protein}
        onChangeText={setProtein}
      />

      <TextInput
        style={poopStyles.timeInput}
        placeholder="Food for Fats"
        value={fatsFood}
        onChangeText={setFatsFood}
      />
      <TextInput
        style={poopStyles.timeInput}
        placeholder="Fats (g)"
        keyboardType="numeric"
        value={fats}
        onChangeText={setFats}
      />

      <View style={poopStyles.buttonContainer}>
        <TouchableOpacity 
          style={[poopStyles.button, poopStyles.saveButton]} 
          onPress={saveNutrients}
        >
          <Text style={poopStyles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[poopStyles.button, poopStyles.cancelButton]}
          onPress={() => setNutrientModalVisible(false)}
        >
          <Text style={poopStyles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

{/* Advanced Nutrient Modal - Using existing styles only */}
<Modal visible={nutModalVisible} transparent animationType="slide">
  <View style={poopStyles.modalOverlay}>
    <View style={poopStyles.modalContainer}>
      <Text style={poopStyles.modalTitle}>Add Food to Nutrients</Text>
      
      {/* Nutrient Selector */}
      <View style={poopStyles.periodSelector}>
        {['carbs', 'protein', 'fats'].map((nutr) => (
          <TouchableOpacity
            key={nutr}
            onPress={() => setSelectedNutrient(nutr)}
            style={[
              poopStyles.periodButton,
              selectedNutrient === nutr 
                ? poopStyles.periodButtonActive 
                : poopStyles.periodButtonInactive
            ]}
          >
            <Text style={[
              poopStyles.periodButtonText,
              selectedNutrient === nutr 
                ? poopStyles.periodButtonTextActive 
                : poopStyles.periodButtonTextInactive
            ]}>
              {nutr.charAt(0).toUpperCase() + nutr.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={poopStyles.timeInput}
        placeholder="Food name"
        value={foodNameInput}
        onChangeText={setFoodNameInput}
      />
      <TextInput
        style={poopStyles.timeInput}
        placeholder="Grams"
        keyboardType="numeric"
        value={foodGramInput}
        onChangeText={setFoodGramInput}
      />

      <View style={poopStyles.buttonContainer}>
        <TouchableOpacity 
          style={[poopStyles.button, poopStyles.saveButton]} 
          onPress={addFoodToNutrient}
        >
          <Text style={poopStyles.buttonText}>Add Food</Text>
        </TouchableOpacity>
      </View>

      <Text style={poopStyles.inputLabel}>
        {selectedNutrient.charAt(0).toUpperCase() + selectedNutrient.slice(1)} Foods:
      </Text>
      <View style={{ maxHeight: 150 }}>
        {renderFoodsList(selectedNutrient)}
      </View>

      <View style={{ marginVertical: 16 }}>
        <Text style={poopStyles.inputLabel}>Carbs: {totals.carbs}g</Text>
        <Text style={poopStyles.inputLabel}>Protein: {totals.protein}g</Text>
        <Text style={poopStyles.inputLabel}>Fats: {totals.fats}g</Text>
      </View>

      <View style={poopStyles.buttonContainer}>
        <TouchableOpacity 
          style={[poopStyles.button, poopStyles.cancelButton]} 
          onPress={() => setNutModalVisible(false)}
        >
          <Text style={poopStyles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </>
  );
};