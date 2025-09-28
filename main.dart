import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.blueAccent,
        body: Center(
          child: RevealCardGrid(),
        ),
      ),
    );
  }
}

class RevealCardGrid extends StatefulWidget {
  const RevealCardGrid({super.key});

  @override
  State<RevealCardGrid> createState() => _RevealCardGridState();
}

class _RevealCardGridState extends State<RevealCardGrid> {
  late List<String> values;
  late List<bool> revealed;
  late List<bool> matched;
  List<int> selectedIndices = [];

  @override
  void initState() {
    super.initState();
    values = [
      'Classical Conditioning', 'Pavlov’s dog',
      'Operant Conditioning', 'Skinner box',
      'Short-term Memory', '7 ± 2 items',
      'Working Memory', 'mental workspace image',
      'Maslow’s Hierarchy', 'pyramid graphic',
      'Piaget', 'stages of development (with visual cues)',
      'Schemas', 'filing cabinet illustration',
      'Selective Attention', 'cocktail party example'
    ]; // 8 pairs, 16 cards for 4x4 grid
    values.shuffle();
    revealed = List.generate(values.length, (_) => false);
    matched = List.generate(values.length, (_) => false);
  }

  void onCardTap(int index) async {
    if (revealed[index] || matched[index] || selectedIndices.length == 2) return;
    setState(() {
      revealed[index] = true;
      selectedIndices.add(index);
    });
    if (selectedIndices.length == 2) {
      int first = selectedIndices[0];
      int second = selectedIndices[1];
      if (values[first] == values[second]) {
        setState(() {
          matched[first] = true;
          matched[second] = true;
          selectedIndices.clear();
        });
      } else {
        await Future.delayed(const Duration(seconds: 1));
        setState(() {
          revealed[first] = false;
          revealed[second] = false;
          selectedIndices.clear();
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // Increase grid size to fit 16 cards (4x4) with spacing
    const gridSize = 400.0; // Increased from 340.0 to 400.0
    final crossAxisCount = 4;

    return Center(
      child: SizedBox(
        width: gridSize,
        height: gridSize,
        child: GridView.count(
          crossAxisCount: crossAxisCount,
          childAspectRatio: 1,
          mainAxisSpacing: 4,
          crossAxisSpacing: 4,
          padding: const EdgeInsets.all(4),
          physics: const NeverScrollableScrollPhysics(),
          children: List.generate(values.length, (index) {
            return RevealCard(
              value: values[index],
              revealed: revealed[index] || matched[index],
              matched: matched[index],
              onTap: () => onCardTap(index),
            );
          }),
        ),
      ),
    );
  }
}

class RevealCard extends StatelessWidget {
  final String value;
  final bool revealed;
  final bool matched;
  final VoidCallback onTap;
  const RevealCard({super.key, required this.value, required this.revealed, required this.matched, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedSwitcher(
        duration: const Duration(milliseconds: 400),
        transitionBuilder: (Widget child, Animation<double> animation) {
          final rotate = Tween(begin: pi, end: 0.0).animate(animation);
          return AnimatedBuilder(
            animation: rotate,
            child: child,
            builder: (context, child) {
              final isUnder = (ValueKey(revealed) != child?.key);
              var tilt = (isUnder ? min(rotate.value, pi / 2) : rotate.value);
              return Transform(
                transform: Matrix4.rotationY(tilt),
                alignment: Alignment.center,
                child: child,
              );
            },
          );
        },
        layoutBuilder: (widget, list) => Stack(children: [widget!, ...list]),
        child: revealed
            ? Opacity(
                opacity: matched ? 0.6 : 1.0,
                child: Card(
                  key: const ValueKey(true),
                  color: Colors.white,
                  elevation: 8,
                  margin: EdgeInsets.zero,
                  child: Center(
                    child: value.endsWith('.png')
                        ? Image.asset(
                            value,
                            fit: BoxFit.contain,
                          )
                        : Text(
                            value,
                            style: const TextStyle(
                              fontFamily: 'Roboto',
                              fontWeight: FontWeight.bold,
                              fontSize: 20,
                              color: Colors.blueAccent,
                            ),
                          ),
                  ),
                ),
              )
            : Card(
                key: const ValueKey(false),
                color: Colors.white,
                elevation: 8,
                margin: EdgeInsets.zero,
                child: Center(
                  child: const Text(
                    '?',
                    style: TextStyle(
                      fontFamily: 'Roboto',
                      fontWeight: FontWeight.bold,
                      fontSize: 20,
                      color: Colors.blueAccent,
                    ),
                  ),
                ),
              ),
      ),
    );
  }
}





