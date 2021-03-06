import 'dart:async';

import 'package:bloc/bloc.dart';
import '/config/enums/app_tab.dart';

import 'package:equatable/equatable.dart';

part 'tab_event.dart';

class TabBloc extends Bloc<TabEvent, AppTab> {
  TabBloc() : super(AppTab.home);

  @override
  Stream<AppTab> mapEventToState(TabEvent event) async* {
    if (event is ChangeTab) {
      yield event.tab;
    }
  }
}
